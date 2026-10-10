import csv
import httpx
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Leaderboard CSV Uploader")

# URL of your Node.js/Express server
EXPRESS_SERVER_URL = "http://localhost:3000/api/leaderboard"


class UploadResponse(BaseModel):
  message: str
  results: list[dict]


@app.post("/upload-csv", response_model=UploadResponse)
async def upload_leaderboard_from_csv(file_path: str = "leaderboard.csv"):
  """Reads a CSV file containing `full_name` and `score` columns and posts them to the Express server."""
  uploaded_entries = []

  try:
    with open(file_path, mode="r", encoding="utf-8") as csv_file:
      reader = csv.DictReader(csv_file)

      async with httpx.AsyncClient() as client:
        for row in reader:
          full_name = row.get("full_name")
          score = row.get("score")

          if not full_name or score is None:
            continue

          payload = {"full_name": full_name, "score": int(score)}

          response = await client.post(EXPRESS_SERVER_URL, json=payload)

          if response.status_code == 201:
            uploaded_entries.append(response.json().get("entry"))
          else:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"Express server error: {response.text}",
            )

  except FileNotFoundError:
    raise HTTPException(
        status_code=404, detail=f"CSV file '{file_path}' not found."
    )
  except Exception as e:
    raise HTTPException(status_code=500, detail=str(e))

  return {
      "message": "CSV data processed and sent to Express server successfully!",
      "results": uploaded_entries,
  }
