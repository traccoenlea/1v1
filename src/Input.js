import React, { useEffect, useState } from "react";

const Input = ({ number }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function addPlayersToArray(number) {
      console.log("in async : " + number);
      for (let i = 0; i < number; i++) {
        console.log(i);
        const data = { id: i, name: "", points: 0 };
        console.log(data);
        setPlayers((oldArray) => [...oldArray, data]);
      }
    }
    addPlayersToArray(number);
  }, []);

  const handlePlayerName = (id) => {
    const name = document.getElementById(`playerName${id}`).value;
    console.log(name);
    setPlayers(players.map((p) => (p.id === id ? { ...p, name: name } : p)));
  };

  return (
    <div>
      <h1>Number</h1>
      <h2>{number}</h2>

      <hr></hr>
      {players.map((p, i) => (
        <div
          key={i}
          style={{
            border: "5px solid lightcoral",
            display: "flex",
            margin: "20px 0",
          }}
        >
          {p.name ? (
            p.name
          ) : (
            <div>
              <input type="text" id={`playerName${p.id}`} />
              <button onClick={() => handlePlayerName(p.id)}>
                Ajouter le player
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Input;
