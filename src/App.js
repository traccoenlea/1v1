import { useState } from "react";
import Players from "./Players";
import Points from "./Points";
import AddPlayer from "./AddPlayer";

function App() {
  const [data, setData] = useState([]);

  const [numberOf1v1Played, setNumberOf1v1Played] = useState(0);

  const startingSpots = [
    { id: 0, name: "tête de raquette" },
    { id: 1, name: "45°" },
    { id: 2, name: "lancer-franc" },
    { id: 3, name: "90°" },
    { id: 4, name: "0°" },
  ];

  const finitions = [
    { id: 0, name: "shoot" },
    { id: 1, name: "push up" },
    { id: 2, name: "extra step" },
    { id: 3, name: "lay up" },
    { id: 4, name: "lay back" },
    { id: 5, name: "power" },
    { id: 6, name: "euro step" },
  ];

  const endingSpots = [
    { id: 0, name: "0°" },
    { id: 1, name: "3pts" },
    { id: 2, name: "raquette" },
    { id: 3, name: "2pts" },
  ];

  const dribbles = [
    { id: 0, name: 0 },
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
    { id: 6, name: "illimité" },
  ];

  const bonus = [
    { type: "bonus", name: "test bonus" },
    { type: "malus", name: "test malus" },
  ];

  const constraints = [
    { id: 0, name: "Constraint 1" },
    { id: 1, name: "Constraint 2" },
  ];

  const arrays = [startingSpots, finitions, endingSpots, dribbles];

  function getRandomname(array) {
    const size = array.length;
    const random = Math.floor(Math.random() * size);
    const dataToReturn = array[random];
    return dataToReturn;
  }

  function handleBtn() {
    setNumberOf1v1Played(numberOf1v1Played + 1);
    setData([]);
    for (let i = 0; i < arrays.length; i++) {
      const tab = arrays[i];
      const random = getRandomname(tab);
      setData((oldArray) => [...oldArray, random]);
    }
  }

  console.log(data);

  return (
    <div className="appContainer">
      {/* <h1>Round {numberOf1v1Played}</h1> */}
      {/* <div className="dataContainer">
        {data.map((d, i) => (
          <h3 key={i}> {d.name}</h3>
        ))}
      </div>
      <div className="buttonContainer">
        <button onClick={handleBtn}>Générer le 1v1</button>
      </div> */}
      <AddPlayer />
      {/* <Players /> */}
      {/* <Points /> */}
    </div>
  );
}

export default App;
