const GameCard = ({
  bColumn,
  iColumn,
  nColumn,
  gColumn,
  oColumn,
  usedNumbers,
}) => {
  return (
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
            <td>{usedNumbers.includes(bColumn[0]) ? "Stamp" : bColumn[0]}</td>
            <td>{usedNumbers.includes(iColumn[0]) ? "Stamp" : iColumn[0]}</td>
            <td>{usedNumbers.includes(nColumn[0]) ? "Stamp" : nColumn[0]}</td>
            <td>{usedNumbers.includes(gColumn[0]) ? "Stamp" : gColumn[0]}</td>
            <td>{usedNumbers.includes(oColumn[0]) ? "Stamp" : oColumn[0]}</td>
          </tr>
          <tr>
            <td>{usedNumbers.includes(bColumn[1]) ? "Stamp" : bColumn[1]}</td>
            <td>{usedNumbers.includes(iColumn[1]) ? "Stamp" : iColumn[1]}</td>
            <td>{usedNumbers.includes(nColumn[1]) ? "Stamp" : nColumn[1]}</td>
            <td>{usedNumbers.includes(gColumn[1]) ? "Stamp" : gColumn[1]}</td>
            <td>{usedNumbers.includes(oColumn[1]) ? "Stamp" : oColumn[1]}</td>
          </tr>
          <tr>
            <td>{usedNumbers.includes(bColumn[2]) ? "Stamp" : bColumn[2]}</td>
            <td>{usedNumbers.includes(iColumn[2]) ? "Stamp" : iColumn[2]}</td>
            <td>{usedNumbers.includes(nColumn[2]) ? "Stamp" : "Free"}</td>
            <td>{usedNumbers.includes(gColumn[2]) ? "Stamp" : gColumn[2]}</td>
            <td>{usedNumbers.includes(oColumn[2]) ? "Stamp" : oColumn[2]}</td>
          </tr>
          <tr>
            <td>{usedNumbers.includes(bColumn[3]) ? "Stamp" : bColumn[3]}</td>
            <td>{usedNumbers.includes(iColumn[3]) ? "Stamp" : iColumn[3]}</td>
            <td>{usedNumbers.includes(nColumn[3]) ? "Stamp" : nColumn[3]}</td>
            <td>{usedNumbers.includes(gColumn[3]) ? "Stamp" : gColumn[3]}</td>
            <td>{usedNumbers.includes(oColumn[3]) ? "Stamp" : oColumn[3]}</td>
          </tr>
          <tr>
            <td>{usedNumbers.includes(bColumn[4]) ? "Stamp" : bColumn[4]}</td>
            <td>{usedNumbers.includes(iColumn[4]) ? "Stamp" : iColumn[4]}</td>
            <td>{usedNumbers.includes(nColumn[4]) ? "Stamp" : nColumn[4]}</td>
            <td>{usedNumbers.includes(gColumn[4]) ? "Stamp" : gColumn[4]}</td>
            <td>{usedNumbers.includes(oColumn[4]) ? "Stamp" : oColumn[4]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameCard;
