import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  const getMessage = () => {
    axios
      .get("https://jsmern-p27-message-1.onrender.com/")
      .then((res) => {
        setMsg(res.data.msg);
      })
      .catch((e) => {
        setMsg("Error fetching message.");
      });
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "lavender",
        fontFamily: "Comic Sans MS",
      }}
    >
      <h1>🌟 Motivational Message Generator 🌟</h1>
      <button
        onClick={getMessage}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "10px",
          backgroundColor: "gold",
          border: "none",
        }}
      >
        Inspire Me
      </button>
      <p style={{ marginTop: "30px", fontSize: "24px" }}>{msg}</p>
    </div>
  );
}

export default App;
