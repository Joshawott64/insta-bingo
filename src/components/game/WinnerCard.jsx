import GameCard from "./GameCard";
import lodash from "lodash";

const WinnerCard = ({
  winningCard,
  setShowWinner,
  setNumberPool,
  setLogText,
  usedNumbers,
  setUsedNumbers,
  setShowGameOverlay,
  setIndex,
  gameMode,
}) => {
  // handler functions
  const handleQuit = () => {
    setShowWinner(false);
    setShowGameOverlay(false);
    setLogText([]);
    setIndex(0);
  };

  const handlePlayAgain = () => {
    setShowWinner(false);
    setNumberPool(lodash.take(lodash.shuffle(lodash.range(1, 76)), 75));
    setUsedNumbers([0]);
    setIndex(0);
  };

  return (
    <div className="fixed z-50 flex flex-col justify-start lg:justify-center place-items-center gap-y-14 h-screen w-full pt-16 bg-gray-600 bg-opacity-50 backdrop-blur-md -translate-y-16">
      <p className="text-2xl md:text-3xl font-bold drop-shadow-lg">
        {winningCard.name} got a {gameMode.toUpperCase()}!
      </p>
      <div className="w-1/2 md:w-1/3 xl:w-1/5 3xl:w-[12%]">
        <GameCard
          key={winningCard.key}
          id={winningCard.id}
          bColumn={winningCard.bColumn}
          iColumn={winningCard.iColumn}
          nColumn={winningCard.nColumn}
          gColumn={winningCard.gColumn}
          oColumn={winningCard.oColumn}
          name={winningCard.name}
          usedNumbers={usedNumbers}
        />
      </div>
      <div className="flex flex-col gap-y-4 text-lg md:text-xl">
        <button
          className="px-2 rounded-md bg-green-400 text-white font-bold drop-shadow-lg"
          onClick={() => handlePlayAgain()}
        >
          Play Again
        </button>
        <button
          className="px-2 rounded-md bg-red-400 text-white font-bold drop-shadow-lg"
          onClick={() => handleQuit()}
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default WinnerCard;
