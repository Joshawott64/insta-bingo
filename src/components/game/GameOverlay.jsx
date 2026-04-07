import { useState } from "react";
import GameLog from "./GameLog";
import GameCard from "./GameCard";
import lodash, { set } from "lodash";

const GameOverlay = ({
  showGameOverlay,
  setShowGameOverlay,
  allBingoCards,
  gameMode,
}) => {
  // state values
  const [startGame, setStartGame] = useState(false);
  const [logText, setLogText] = useState([]);
  const [numberPool, setNumberPool] = useState(
    lodash.take(lodash.shuffle(lodash.range(1, 76)), 75)
  );
  const [usedNumbers, setUsedNumbers] = useState([0]);
  const [index, setIndex] = useState(0);

  console.log("numberPool:", numberPool);

  // functions
  const runManualBingo = () => {
    const currentNum = numberPool[index];
    setLogText([...logText, `${currentNum} has been called...`]);
    setUsedNumbers([...usedNumbers, currentNum]);

    if (index >= 3) {
      console.log("checking for bingos...");

      for (let i = 0; i < allBingoCards.length; i++) {
        const colCheck = checkColumns(allBingoCards[i]);
        const rowCheck = checkRows(allBingoCards[i]);
        const diagCheck = checkDiagonals(allBingoCards[i]);

        if (colCheck || rowCheck || diagCheck) {
          console.log(`CARD_ID: ${allBingoCards[i].id} got a BINGO!!!`);
          setLogText([
            ...logText,
            `CARD_ID: ${allBingoCards[i].id} got a BINGO!!!`,
          ]);
        } else {
          console.log("no bingos found...");
          setIndex(index + 1);
        }
      }
    } else {
      setIndex(index + 1);
    }
  };

  const runManualBlackout = () => {
    const currentNum = numberPool[index];
    setLogText([...logText, `${currentNum} has been called...`]);
    setUsedNumbers([...usedNumbers, currentNum]);

    if (index >= 23) {
      console.log("checking for blackouts...");

      for (let i = 0; i < allBingoCards.length; i++) {
        if (checkBlackOut(allBingoCards[i])) {
          console.log(`CARD_ID: ${allBingoCards[i].id} got a BLACKOUT!!!`);
          setLogText([
            ...logText,
            `CARD_ID: ${allBingoCards[i].id} got a BLACKOUT!!!`,
          ]);
        } else {
          console.log("no blackouts found...");
          setIndex(index + 1);
        }
      }
    } else {
      setIndex(index + 1);
    }
  };

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
      return true;
    } else {
      return false;
    }
  };

  const checkBlackOut = (card) => {
    console.log("card:", card);
    const allColumns = [
      ...card.bColumn,
      ...card.iColumn,
      ...card.nColumn,
      ...card.gColumn,
      ...card.oColumn,
    ];

    return allColumns.filter((e) => usedNumbers.includes(e)).length === 25;
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
      {!startGame && gameMode === "bingo" && (
        <button
          onClick={() => {
            setStartGame(true);
            runManualBingo(index);
          }}
        >
          START BINGO
        </button>
      )}
      {!startGame && gameMode === "blackout" && (
        <button
          onClick={() => {
            setStartGame(true);
            runManualBlackout(index);
          }}
        >
          START BLACKOUT
        </button>
      )}

      {startGame && gameMode === "bingo" && (
        <button onClick={() => runManualBingo(index)}>NEXT NUMBER</button>
      )}
      {startGame && gameMode === "blackout" && (
        <button onClick={() => runManualBlackout(index)}>NEXT NUMBER</button>
      )}
      {cardElements}
      <GameLog logText={logText} />
    </div>
  );
};

export default GameOverlay;
