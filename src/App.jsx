import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import GameOverlay from "./components/game/GameOverlay";
import BingoCard from "./components/bingo_card/BingoCard";
import About from "./components/navbar/About";
import "./App.css";
import lodash from "lodash";
import { HiOutlinePencilAlt, HiPlusCircle } from "react-icons/hi";

function App() {
  // state values
  const [showAbout, setShowAbout] = useState(false);
  const [gameMode, setGameMode] = useState("bingo");
  const [showGameOverlay, setShowGameOverlay] = useState(false);
  const [allBingoCards, setAllBingoCards] = useState([]);
  const [cardName, setCardName] = useState("New Player"); // maybe generate a random pool of names to use?

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
    <div className="flex flex-col min-h-svh w-screen justify-start pb-8 font-mono">
      <Navbar showAbout={showAbout} setShowAbout={setShowAbout} />
      <div className="absolute z-40 w-full pt-16">
        {showAbout && <About />}
        <div className="flex justify-end mx-4">
          <button
            className="h-fit w-fit px-4 py-1 bg-cyan-400 rounded-b-sm drop-shadow-lg"
            onClick={() => setShowAbout(!showAbout)}
          >
            <p className="font-bold drop-shadow-lg">About</p>
          </button>
        </div>
      </div>
      {showGameOverlay && (
        <GameOverlay
          showGameOverlay={showGameOverlay}
          setShowGameOverlay={setShowGameOverlay}
          allBingoCards={allBingoCards}
          gameMode={gameMode}
        />
      )}
      {!showGameOverlay && (
        <div className="flex flex-col gap-y-6 justify-start place-items-center h-full w-full pt-12 text-xl">
          <button
            className={`px-2 rounded-md text-white font-bold drop-shadow-lg transition-all duration-200 ${
              allBingoCards.length > 0 ? "bg-green-400" : "bg-gray-400"
            }`}
            disabled={allBingoCards.length === 0}
            onClick={() => setShowGameOverlay(true)}
          >
            PLAY!
          </button>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-row gap-x-2 place-items-center">
              <input
                type="radio"
                name="gameMode"
                value="bingo"
                defaultChecked={gameMode === "bingo"}
                onChange={(e) => setGameMode(e.target.value)}
              />
              <p className="drop-shadow-lg">Bingo</p>
            </div>
            <div className="flex flex-row gap-x-2 place-items-center">
              <input
                type="radio"
                name="gameMode"
                value="blackout"
                defaultChecked={gameMode === "blackout"}
                onChange={(e) => setGameMode(e.target.value)}
              />
              <p className="drop-shadow-lg">Blackout</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full justify-center place-items-center">
            <div className="flex flex-row justify-center place-items-center">
              {/* TODO: Implement character limit on names. Or maybe abbreviate long names? */}
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="flex justify-center place-items-center h-10 w-48 px-2 py-1 text-center rounded-md border-2 border-black focus:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-80 drop-shadow-lg"
              ></input>
              <HiOutlinePencilAlt className="absolute text-2xl translate-x-28" />
            </div>
            <button
              className="flex flex-row gap-x-1 px-2 place-items-center bg-green-400 rounded-md text-white font-bold drop-shadow-lg"
              onClick={() => handleAdd()}
            >
              <HiPlusCircle className="drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Card</p>
            </button>
          </div>
          <div className="flex flex-col gap-y-4 justify-start place-items-center h-[360px] w-full py-2 overflow-y-scroll">
            {cardElements}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
