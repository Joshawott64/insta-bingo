const GameLog = ({ logText }) => {
  // map over logText
  const logEntries = logText.map((entry, i) => (
    <p key={i} className="drop-shadow-lg">
      {entry}
    </p>
  ));

  return (
    <div className="flex flex-col justify-start place-items-center w-5/12 p-2 bg-gray-200 rounded-2xl drop-shadow-lg">
      <h1 className="text-xl font-semibold drop-shadow-lg">GAME LOG</h1>
      <div className="w-full text-left text-sm overflow-y-auto">
        {logEntries}
      </div>
    </div>
  );
};

export default GameLog;
