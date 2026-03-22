const GameLog = ({ logText }) => {
  // map over logText
  const logEntries = logText.map((entry, i) => (
    <div key={i}>
      <p>{entry}</p>
    </div>
  ));
  return (
    <div>
      <h1>GAME LOG</h1>
      {logEntries}
    </div>
  );
};

export default GameLog;
