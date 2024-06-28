import React, { useState } from "react";
import Input from "./Input";

const AddPlayer = () => {
  const [numbersOfPlayers, setNumberOfPlayers] = useState(0);

  function handleBtnAdd() {
    const data = document.getElementById("playersNumber").value;
    if (!data) {
      alert("Vous devez d'abord sélectionner un nombre de players !");
    } else {
      setNumberOfPlayers(data);
    }
  }

  return (
    <div>
      {numbersOfPlayers !== 0 ? (
        <div>
          <h2>Entrez les nicknames de vos players !</h2>
          <Input number={numbersOfPlayers} />
        </div>
      ) : (
        <div>
          <h2>Combien de players vont jouer ?</h2>
          <p>(2 players minimum & X maximum)</p>

          <input
            type="number"
            id="playersNumber"
            placeholder="0"
            min={2}
            max={10}
          />

          <button onClick={handleBtnAdd}>Ajouter les players</button>
        </div>
      )}
    </div>
  );
};

export default AddPlayer;
