import React, { useEffect, useState } from "react";

const Points = () => {
  const [players, setPlayers] = useState([
    { id: 0, name: "Marion", points: 2 },
    { id: 1, name: "Chloé B", points: 0 },
    { id: 2, name: "Cam", points: 0 },
    { id: 3, name: "Léa", points: 0 },
  ]);

  const gamingPoint = 5;

  useEffect(() => {
    async function checkTheScore() {
      console.log("in UseEffect : " + players[0].points);
      for (let i = 0; i < players.length; i++) {
        console.log(players[i].name);
        if (players[i].points === gamingPoint) {
          if (
            players[i].name === "Léa" ||
            players[i].name === "Tracco" ||
            players[i].name === "Kangourou"
          ) {
            alert(
              `Je savais bien que ça paierait de faire ce site ! Bien ouéj moi du futur ou plutôt... ${players[i].name} !`
            );
          } else {
            alert(`LEZGOOOOOOO ! ${players[i].name} remporte la partie !`);
          }
        }
      }
    }
    checkTheScore();
  });
  const soustractBtn = (id) => {
    if (players[id].points === 0) {
      alert(
        `Ne trichez pas, nous n'enlèverons pas plus de point à ${players[id].name} !`
      );
    } else {
      console.log(players[id].points);
      const newPoints = players[id].points - 1;
      console.log(newPoints);
      setPlayers(
        players.map((p) => (p.id === id ? { ...p, points: newPoints } : p))
      );
    }
  };

  const addBtn = (id) => {
    console.log(players[id].name);
    if (players[id].points === gamingPoint) {
      alert("Le jeu est fini, veuillez recommencer ! ");
      //   ajouter un btn de start again
    } else {
      console.log(players[id].points);
      const newPoints = players[id].points + 1;
      console.log(newPoints);
      setPlayers(
        players.map((p) => (p.id === id ? { ...p, points: newPoints } : p))
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        textAlign: "center",
        // fontSize: "1.5rem",
      }}
    >
      {players.map((p, i) => (
        <div key={i}>
          <h2>{p.name}</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "50px",
              fontSize: "1.5rem",
            }}
          >
            <button
              onClick={() => soustractBtn(p.id)}
              style={{ width: "30%", fontSize: "100%" }}
            >
              -
            </button>
            <h3>{p.points}</h3>
            <button
              onClick={() => addBtn(p.id)}
              style={{ width: "30%", fontSize: "100%" }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Points;
