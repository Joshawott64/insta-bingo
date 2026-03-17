import { useState } from "react";
import lodash from "lodash";

const BingoCard = ({ allBingoCards, setAllBingoCards, index }) => {
  // component-specific, non state-value copy of allBingoCards
  const cardsCopy = [...allBingoCards];
  console.log("cardsCopy:", cardsCopy);
  console.log("index:", index);

  // state values
  // TODO: Figure out a way to prevent duplicate numbers in columns
  const [cardName, setCardName] = useState("New Player");
  const [bColumn, setBColumn] = useState([
    lodash.random(1, 15),
    lodash.random(1, 15),
    lodash.random(1, 15),
    lodash.random(1, 15),
    lodash.random(1, 15),
  ]);
  const [iColumn, setIColumn] = useState([
    lodash.random(16, 30),
    lodash.random(16, 30),
    lodash.random(16, 30),
    lodash.random(16, 30),
    lodash.random(16, 30),
  ]);
  const [nColumn, setNColumn] = useState([
    lodash.random(31, 45),
    lodash.random(31, 45),
    0,
    lodash.random(31, 45),
    lodash.random(31, 45),
  ]);
  const [gColumn, setGColumn] = useState([
    lodash.random(46, 60),
    lodash.random(46, 60),
    lodash.random(46, 60),
    lodash.random(46, 60),
    lodash.random(46, 60),
  ]);
  const [oColumn, setOColumn] = useState([
    lodash.random(61, 75),
    lodash.random(61, 75),
    lodash.random(61, 75),
    lodash.random(61, 75),
    lodash.random(61, 75),
  ]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        ></input>
        <p>{cardName}'s Card</p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>B</td>
              <td>I</td>
              <td>N</td>
              <td>G</td>
              <td>O</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bColumn[0]}</td>
              <td>{iColumn[0]}</td>
              <td>{nColumn[0]}</td>
              <td>{gColumn[0]}</td>
              <td>{oColumn[0]}</td>
            </tr>
            <tr>
              <td>{bColumn[1]}</td>
              <td>{iColumn[1]}</td>
              <td>{nColumn[1]}</td>
              <td>{gColumn[1]}</td>
              <td>{oColumn[1]}</td>
            </tr>
            <tr>
              <td>{bColumn[2]}</td>
              <td>{iColumn[2]}</td>
              <td>Free</td>
              <td>{gColumn[2]}</td>
              <td>{oColumn[2]}</td>
            </tr>
            <tr>
              <td>{bColumn[3]}</td>
              <td>{iColumn[3]}</td>
              <td>{nColumn[3]}</td>
              <td>{gColumn[3]}</td>
              <td>{oColumn[3]}</td>
            </tr>
            <tr>
              <td>{bColumn[4]}</td>
              <td>{iColumn[4]}</td>
              <td>{nColumn[4]}</td>
              <td>{gColumn[4]}</td>
              <td>{oColumn[4]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>{index > 0 && <button>Delete</button>}</div>
    </div>
  );
};

export default BingoCard;
