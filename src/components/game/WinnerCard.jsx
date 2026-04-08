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
  gameMode,
}) => {
  // handler functions
  const handleQuit = () => {
    setShowWinner(false);
    setShowGameOverlay(false);
    setLogText([]);
  };

  const handlePlayAgain = () => {
    setShowWinner(false);
    setNumberPool(lodash.take(lodash.shuffle(lodash.range(1, 76)), 75));
    setUsedNumbers([0]);
  };

  return (
    <div>
      <h1>WINNER CARD</h1>
      <p>
        {winningCard.name} got a {gameMode.toUpperCase()}!
      </p>
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
      <button onClick={() => handlePlayAgain()}>Play Again</button>
      <button onClick={() => handleQuit()}>Quit</button>
    </div>
  );
};

export default WinnerCard;
