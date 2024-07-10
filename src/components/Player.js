import React from "react";
import Input from "./Input";

const Player = ({ players }) => {
  console.log(players);
  return (
    <div className="playersContainer">
      <div className="onePlayerContainer mt30 flex">
        <div className="playerData">
          <h3>Player 1</h3>
          <div className="flex mauto">
            <h3>Name : </h3>

            <span className="playerName">Léa</span>
          </div>
        </div>

        <div className="playerPoints flexc jcc">
          <div className="flexc jcfs tac">100</div>
          <div className="flexc jcfe tac">pts</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
