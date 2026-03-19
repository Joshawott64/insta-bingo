import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import BingoCard from "./components/bingo_card/BingoCard";
import "./App.css";
import lodash from "lodash";

function App() {
  // state values
  const [showAbout, setShowAbout] = useState(false);
  const [gameMode, setGameMode] = useState("bingo");
  const [gamePlaying, setGamePlaying] = useState(false);
  const [allBingoCards, setAllBingoCards] = useState([]);

  // handler functions
  const handleAdd = () => {
    // TODO: Figure out a way to prevent duplicate numbers in columns
    const newCard = {
      key: allBingoCards.length,
      index: allBingoCards.length,
      bColumn: [
        lodash.random(1, 15),
        lodash.random(1, 15),
        lodash.random(1, 15),
        lodash.random(1, 15),
        lodash.random(1, 15),
      ],
      iColumn: [
        lodash.random(16, 30),
        lodash.random(16, 30),
        lodash.random(16, 30),
        lodash.random(16, 30),
        lodash.random(16, 30),
      ],
      nColumn: [
        lodash.random(31, 45),
        lodash.random(31, 45),
        0,
        lodash.random(31, 45),
        lodash.random(31, 45),
      ],
      gColumn: [
        lodash.random(46, 60),
        lodash.random(46, 60),
        lodash.random(46, 60),
        lodash.random(46, 60),
        lodash.random(46, 60),
      ],
      oColumn: [
        lodash.random(61, 75),
        lodash.random(61, 75),
        lodash.random(61, 75),
        lodash.random(61, 75),
        lodash.random(61, 75),
      ],
    };

    setAllBingoCards([...allBingoCards, newCard]);
  };

  const handleDelete = (index) => {
    const updatedBingoCards = allBingoCards.filter(
      (card) => card.index !== index
    );

    setAllBingoCards(updatedBingoCards);
  };

  // map over allBingoCards
  const cardElements = allBingoCards.map((card, i) => {
    return (
      <BingoCard
        key={card.key}
        index={card.index}
        handleDelete={handleDelete}
        bColumn={card.bColumn}
        iColumn={card.iColumn}
        nColumn={card.nColumn}
        gColumn={card.gColumn}
        oColumn={card.oColumn}
      />
    );
  });

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
        <button onClick={(e) => handleAdd()}>Add Card</button>
      </div>
      {cardElements}
    </>
  );
}

export default App;
