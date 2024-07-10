import React, { useState } from "react";
import Player from "./Player";

const Homepage = () => {
  const [players, setPlayers] = useState([{ id: 0, name: "Léa" }]);
  return (
    <div className="homepageContainer">
      <div className="flex jce">
        <h2>Choose your settings</h2>
        <div className="settingsContainer">
          <div className="circle"></div>
        </div>
      </div>
      <div className="constraintsContainer mt30 mb30">
        <h3>Nombre de points</h3>
        <p>Choix du nombre de points à marquer pour gagner</p>
        <input type="number" min={2} placeholder="Points" />
      </div>

      <h2 className="mt20">Ajouter vos players</h2>

      <Player players={players} />
    </div>
  );
};

export default Homepage;
