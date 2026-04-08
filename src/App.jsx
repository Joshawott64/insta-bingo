import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import GameOverlay from "./components/game/GameOverlay";
import BingoCard from "./components/bingo_card/BingoCard";
import "./App.css";
import lodash from "lodash";

function App() {
  // state values
  const [showAbout, setShowAbout] = useState(false);
  const [gameMode, setGameMode] = useState("bingo");
  const [showGameOverlay, setShowGameOverlay] = useState(false);
  const [allBingoCards, setAllBingoCards] = useState([]);
  const [cardName, setCardName] = useState("New Player");

  // handler functions
  const handleAdd = () => {
    // generate n column & splice in free space
    const n = lodash.take(lodash.shuffle(lodash.range(31, 46)), 4);
    n.splice(2, 0, 0);

    const newCard = {
      key: allBingoCards.length === 0 ? 0 : allBingoCards.at(-1).key + 1,
      id: allBingoCards.length === 0 ? 0 : allBingoCards.at(-1).id + 1,
      bColumn: lodash.take(lodash.shuffle(lodash.range(1, 16)), 5),
      iColumn: lodash.take(lodash.shuffle(lodash.range(16, 31)), 5),
      nColumn: n,
      gColumn: lodash.take(lodash.shuffle(lodash.range(46, 61)), 5),
      oColumn: lodash.take(lodash.shuffle(lodash.range(61, 76)), 5),
      name: cardName,
    };

    setAllBingoCards([...allBingoCards, newCard]);
    setCardName("New Player");
  };

  const handleDelete = (id) => {
    const updatedBingoCards = allBingoCards.filter((card) => card.id !== id);

    setAllBingoCards(updatedBingoCards);
  };

  // map over allBingoCards
  const cardElements = allBingoCards.map((card) => (
    <BingoCard
      key={card.key}
      id={card.id}
      handleDelete={handleDelete}
      bColumn={card.bColumn}
      iColumn={card.iColumn}
      nColumn={card.nColumn}
      gColumn={card.gColumn}
      oColumn={card.oColumn}
      name={card.name}
    />
  ));

  return (
    <>
      <Navbar />
      {showGameOverlay && (
        <GameOverlay
          showGameOverlay={showGameOverlay}
          setShowGameOverlay={setShowGameOverlay}
          allBingoCards={allBingoCards}
          gameMode={gameMode}
        />
      )}
      {!showGameOverlay && (
        <>
          {allBingoCards.length > 0 && (
            <button onClick={() => setShowGameOverlay(true)}>PLAY</button>
          )}
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
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            ></input>
            <button onClick={() => handleAdd()}>Add Card</button>
          </div>
          {cardElements}
        </>
      )}
    </>
  );
}

export default App;
