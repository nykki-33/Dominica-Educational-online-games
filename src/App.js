import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        color: "white",
        fontFamily: "Arial",
        textAlign: "center",
        padding: 20,
      }}
    >
      <h1>🌴 Dominica Learning Adventure</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("Math")}>Math</button>
        <button onClick={() => setPage("Driving")}>Driving</button>
        <button onClick={() => setPage("Cyber")}>Cyber</button>
      </div>

      {page === "Home" && <h2>Welcome to Dominica 🌴</h2>}

      {page === "Math" && (
        <div>
          <h2>🧮 Math Game</h2>
          <p>What is 5 × 6?</p>
          <button>30</button>
          <button>25</button>
        </div>
      )}

      {page === "Driving" && (
        <div>
          <h2>🚗 Drive Dominica</h2>
          <p>Explore places like Red Rocks & Freshwater Lake</p>
        </div>
      )}

      {page === "Cyber" && (
        <div>
          <h2>🛡 Cyber Safety</h2>
          <p>Never share your password!</p>
        </div>
      )}
    </div>
  );
}
