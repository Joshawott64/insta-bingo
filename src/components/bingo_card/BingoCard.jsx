import { useState } from "react";

const BingoCard = ({
  index,
  handleDelete,
  bColumn,
  iColumn,
  nColumn,
  gColumn,
  oColumn,
}) => {
  // state values
  const [cardName, setCardName] = useState("New Player");

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
      <div>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    </div>
  );
};

export default BingoCard;
