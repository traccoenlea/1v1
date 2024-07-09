import React from "react";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="flex jce">
        <h1>Choose your settings</h1>
        <div className="settingsContainer">
          <div className="circle"></div>
        </div>
      </div>
      <div className="constraintsContainer">
        <h3>Nombre de points</h3>
        <p>Choix du nombre de points à marquer pour gagner</p>
        <input type="number" min={2} placeholder="Points" />
      </div>

      <div className="playersContainer">Players container</div>
    </div>
  );
};

export default Homepage;
