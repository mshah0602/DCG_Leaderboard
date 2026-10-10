import React from "react";
import investigationDesk from "./assets/investigation-desk.html?raw";

function App() {
  return (
    <iframe
      className="investigation-desk"
      title="Investigation desk"
      srcDoc={investigationDesk}
    />
  );
}

export default App;
