import React, { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import investigationDesk from "./assets/investigation-desk.html?raw";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });

const updateLeaderboardDocument = (document, standings) => {
  const tbody = document.querySelector(".standings-table tbody");
  const count = document.querySelector(".standings-count");
  const status = document.querySelector(".standings-updated");

  if (!tbody || !count || !status) {
    return;
  }

  const rows = document.createDocumentFragment();
  standings.forEach(({ teamName, score }, index) => {
    const row = document.createElement("tr");
    row.tabIndex = 0;

    const rankCell = document.createElement("td");
    const rank = document.createElement("span");
    rank.className = `standing-rank ${["gold", "silver", "bronze"][index] ?? ""}`;
    rank.textContent = String(index + 1);
    rankCell.append(rank);

    const teamCell = document.createElement("td");
    teamCell.className = "standing-team";
    teamCell.textContent = teamName;

    const scoreCell = document.createElement("td");
    scoreCell.className = "standing-points";
    scoreCell.textContent = score.toLocaleString();

    row.append(rankCell, teamCell, scoreCell);
    rows.append(row);
  });

  tbody.replaceChildren(rows);
  count.textContent = `Showing 1–${standings.length} of ${standings.length} teams`;
  status.textContent = "Auto-refreshes every 5 seconds";
};

function App() {
  const [srcDoc, setSrcDoc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const iframeRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let refreshing = false;
    let hasLoaded = false;

    const showError = (message) => {
      if (!hasLoaded) {
        setErrorMessage(message);
        return;
      }

      const status =
        iframeRef.current?.contentDocument?.querySelector(
          ".standings-updated",
        );
      if (status) {
        status.textContent = message;
      }
    };

    if (!supabase) {
      showError(
        "Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to your .env file.",
      );
      return () => {
        cancelled = true;
      };
    }

    const loadLeaderboard = async () => {
      if (refreshing) {
        return;
      }

      refreshing = true;

      try {
        const { data, error } = await supabase
          .from("participants")
          .select("team_name, score")
          .order("score", { ascending: false, nullsFirst: false });

        if (cancelled) {
          return;
        }

        if (error) {
          showError(`Could not refresh the leaderboard: ${error.message}`);
          return;
        }

        const standings = (data ?? []).map((row) => ({
          teamName:
            typeof row.team_name === "string" ? row.team_name.trim() : "",
          score:
            typeof row.score === "number"
              ? row.score
              : typeof row.score === "string" && row.score.trim() !== ""
                ? Number(row.score)
                : Number.NaN,
        }));
        const invalidStanding = standings.find(
          ({ teamName, score }) =>
            teamName.length === 0 || !Number.isFinite(score),
        );

        if (invalidStanding) {
          showError(
            "The participants table contains a team with a missing name or invalid score.",
          );
          return;
        }

        if (standings.length === 0) {
          showError("No teams were found in the participants table.");
          return;
        }

        if (hasLoaded) {
          const document = iframeRef.current?.contentDocument;
          if (document) {
            updateLeaderboardDocument(document, standings);
          }
          return;
        }

        const rowsHtml = standings
          .map(({ teamName, score }, index) => {
            const rank = index + 1;
            const rankClass = ["gold", "silver", "bronze"][index] ?? "";

            return `<tr tabindex="0"><td><span class="standing-rank ${rankClass}">${rank}</span></td><td class="standing-team">${escapeHtml(teamName)}</td><td class="standing-points">${score.toLocaleString()}</td></tr>`;
          })
          .join("\n        ");
        const page = investigationDesk
          .replace("<!-- LEADERBOARD_ROWS -->", rowsHtml)
          .replace(
            "<!-- LEADERBOARD_COUNT -->",
            `Showing 1–${standings.length} of ${standings.length} teams`,
          )
          .replace("<!-- LEADERBOARD_SEASON -->", "ALL TEAMS · SEASON 04");

        hasLoaded = true;
        setErrorMessage("");
        setSrcDoc(page);
      } catch (error) {
        if (!cancelled) {
          const message =
            error instanceof Error ? error.message : String(error);
          showError(`Could not refresh the leaderboard: ${message}`);
        }
      } finally {
        refreshing = false;
      }
    };

    void loadLeaderboard();
    const refreshInterval = window.setInterval(() => {
      void loadLeaderboard();
    }, 5000);

    return () => {
      cancelled = true;
      window.clearInterval(refreshInterval);
    };
  }, []);

  if (errorMessage && !srcDoc) {
    return (
      <main className="leaderboard-status leaderboard-status-error" role="alert">
        {errorMessage}
      </main>
    );
  }

  if (!srcDoc) {
    return (
      <main className="leaderboard-status" role="status">
        Loading leaderboard…
      </main>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      className="investigation-desk"
      title="Investigation desk"
      srcDoc={srcDoc}
    />
  );
}

export default App;
