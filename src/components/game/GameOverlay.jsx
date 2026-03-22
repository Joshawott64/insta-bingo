import { useState } from "react";
import GameLog from "./GameLog";
import GameCard from "./GameCard";
import lodash from "lodash";

const GameOverlay = ({
  gamePlaying,
  setGamePlaying,
  allBingoCards,
  gameMode,
}) => {
  // state values
  const [pauseGame, setPauseGame] = useState(true);
  const [logText, setLogText] = useState([]);
  const [usedNumbers, setUsedNumbers] = useState([0]);

  // generate number pool
  const numberPool = lodash.take(lodash.shuffle(lodash.range(1, 76)), 75);
  console.log("numberPool:", numberPool);
  console.log("allBingoCards:", allBingoCards);
  // const usedNumbers = [0];

  // functions
  const runBingo = () => {
    setLogText([...logText, "STARTING BINGO..."]);
    numberPool.forEach((num) => {
      // usedNumbers.push(num);
      setUsedNumbers([...usedNumbers, num]);
      setLogText([...logText, `!!! ${num} !!!`]);

      // only start checking cards after 4 iterations
      if (usedNumbers.length >= 4) {
        console.log("checking cards now");
        allBingoCards.forEach((card) => {
          // check columns
          checkColumns(card);

          // check rows
          checkRows(card);

          // check diagonals
          checkDiagonals(card);
        });
      }
    });
  };

  const runBlackOut = () => {};

  // separate functions to help with efficiency
  const checkColumns = (card) => {
    const result = [
      card.bColumn.filter((e) => usedNumbers.includes(e)).length === 5,
      card.iColumn.filter((e) => usedNumbers.includes(e)).length === 5,
      card.nColumn.filter((e) => usedNumbers.includes(e)).length === 5,
      card.gColumn.filter((e) => usedNumbers.includes(e)).length === 5,
      card.oColumn.filter((e) => usedNumbers.includes(e)).length === 5,
    ];

    if (result.includes(true)) {
      setLogText([...logText, `${card.id} got a BINGO!!!`]);
      return true;
    } else {
      return false;
    }
  };
  const checkRows = (card) => {
    const row1 = [
      card.bColumn[0],
      card.iColumn[0],
      card.nColumn[0],
      card.gColumn[0],
      card.oColumn[0],
    ];
    const row2 = [
      card.bColumn[1],
      card.iColumn[1],
      card.nColumn[1],
      card.gColumn[1],
      card.oColumn[1],
    ];
    const row3 = [
      card.bColumn[2],
      card.iColumn[2],
      card.nColumn[2],
      card.gColumn[2],
      card.oColumn[2],
    ];
    const row4 = [
      card.bColumn[3],
      card.iColumn[3],
      card.nColumn[3],
      card.gColumn[3],
      card.oColumn[3],
    ];
    const row5 = [
      card.bColumn[4],
      card.iColumn[4],
      card.nColumn[4],
      card.gColumn[4],
      card.oColumn[4],
    ];

    const result = [
      row1.filter((e) => usedNumbers.includes(e)).length === 5,
      row2.filter((e) => usedNumbers.includes(e)).length === 5,
      row3.filter((e) => usedNumbers.includes(e)).length === 5,
      row4.filter((e) => usedNumbers.includes(e)).length === 5,
      row5.filter((e) => usedNumbers.includes(e)).length === 5,
    ];

    if (result.includes(true)) {
      setLogText([...logText, `${card.id} got a BINGO!!!`]);
      return true;
    } else {
      return false;
    }
  };

  const checkDiagonals = (card) => {
    const diagonal1 = [
      card.bColumn[0],
      card.oColumn[1],
      card.iColumn[2],
      card.nColumn[3],
      card.oColumn[4],
    ];
    const diagonal2 = [
      card.bColumn[4],
      card.oColumn[3],
      card.iColumn[2],
      card.nColumn[1],
      card.oColumn[0],
    ];

    const result = [
      diagonal1.filter((e) => usedNumbers.includes(e)).length === 5,
      diagonal2.filter((e) => usedNumbers.includes(e)).length === 5,
    ];

    if (result.includes(true)) {
      setLogText([...logText, `${card.id} got a BINGO!!!`]);
      return true;
    } else {
      return false;
    }
  };

  // map over allBingoCards
  const cardElements = allBingoCards.map((card) => (
    <GameCard
      key={card.key}
      id={card.id}
      bColumn={card.bColumn}
      iColumn={card.iColumn}
      nColumn={card.nColumn}
      gColumn={card.gColumn}
      oColumn={card.oColumn}
      usedNumbers={usedNumbers}
    />
  ));

  return (
    <div>
      <h1>GAME OVERLAY</h1>
      <button onClick={() => runBingo()}>START</button>
      {cardElements}
      <GameLog logText={logText} />
    </div>
  );
};

export default GameOverlay;
