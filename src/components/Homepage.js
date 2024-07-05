import React from "react";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="settings"></div>
      <h1>Rounds</h1>

      <div className="roundsContainer">
        <h2>Points</h2>
        <h4>
          Choississez le nombre de points que les players doivent marquer pour
          gagner
        </h4>
        <select>
          <option>Select</option>
        </select>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="playersContainer">
        <h2>Ajoutez vos players</h2>
        <div className="onePlayer flex jcb">
          <div className="flexc jcc">
            <h3>Player 1</h3>
            <div className="flex">
              <h3>Name : </h3>
              <h3> Léa</h3>
            </div>
          </div>
          <div className="pointsContainer flexc jcc tac">
            <span>100</span>
            <span>pts</span>
          </div>
        </div>

        <div className="addPlayer flexc jcc">
          <button className="btnBlur">+</button>
          <p>Nouveau player</p>
        </div>
      </div>

      <button className="btn">Start</button>
    </div>
  );
};

export default Homepage;
