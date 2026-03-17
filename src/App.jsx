import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import BingoCard from "./components/bingo_card/BingoCard";
import "./App.css";
import { set } from "lodash";

function App() {
  // state values
  const [showAbout, setShowAbout] = useState(false);
  const [gameMode, setGameMode] = useState("bingo");
  const [gamePlaying, setGamePlaying] = useState(false);
  const [allBingoCards, setAllBingoCards] = useState([0]);

  const cardElements = allBingoCards.map((card, i) => (
    <BingoCard
      key={i}
      allBingoCards={allBingoCards}
      setAllBingoCards={setAllBingoCards}
      index={i}
    />
  ));

  return (
    <>
      <Navbar />
      <div>
        <p>Current mode: {gameMode}</p>
        <label>
          <input
            type="radio"
            name="gameMode"
            value="bingo"
            defaultChecked
            onChange={(e) => setGameMode(e.target.value)}
          />
          Bingo
        </label>
        <label>
          <input
            type="radio"
            name="gameMode"
            value="blackout"
            onChange={(e) => setGameMode(e.target.value)}
          />
          Blackout
        </label>
      </div>
      <div>
        <button
          onClick={(e) =>
            setAllBingoCards([
              ...allBingoCards,
              allBingoCards[allBingoCards.length - 1] + 1,
            ])
          }
        >
          Add Card
        </button>
      </div>
      {cardElements}
    </>
  );
}

export default App;
