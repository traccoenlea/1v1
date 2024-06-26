import React, { useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");

  function addPlayer() {
    if (playerName.length !== 0) {
      setPlayers((oldArray) => [...oldArray, playerName]);
      setPlayerName("");
    } else {
      alert("Vous devez d'abord entrer un prénom !");
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <div>
      <h1>Ajouter vos players : </h1>

      {players.map((p, i) => (
        <h4 key={i}>{players}</h4>
      ))}

      <input
        type="text"
        min="3"
        max="10"
        onChange={handleChange}
        value={playerName}
      />
      <button onClick={addPlayer}>Ajouter le player</button>
    </div>
  );
};

export default Players;
