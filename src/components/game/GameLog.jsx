const GameLog = ({ logText }) => {
  // map over logText
  const logEntries = logText.map((entry, i) => (
    <p key={i} className="drop-shadow-lg">
      {entry}
    </p>
  ));

  return (
    <div className="flex flex-col justify-start place-items-center md:gap-y-2 w-5/12 lg:w-1/4 xl:w-1/5 3xl:w-[12%] p-2 lg:p-3 bg-gray-200 rounded-2xl drop-shadow-lg">
      <h1 className="text-xl md:text-2xl font-semibold drop-shadow-lg">
        GAME LOG
      </h1>
      <div className="w-full text-left text-sm md:text-base overflow-y-auto">
        {logEntries}
      </div>
    </div>
  );
};

export default GameLog;
