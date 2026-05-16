const About = () => {
  return (
    <div className="flex-1 md:justify-self-end md:w-1/2 lg:w-1/3 3xl:w-1/5 bg-pink-500 mx-4 md:mx-6 lg:mx-10 3xl:mx-20 p-3 font-mono text-white rounded-bl-lg drop-shadow-lg">
      <p className="drop-shadow-lg">
        Is traditional BINGO just a bit too slow for your liking? Does waiting
        for someone to slowly pick out a number drive you up the wall? Me
        neither, but I've been in a slump and needed a something to work on to
        help get me back in the swing of things.
        <br />
        INSTA-BINGO will generate random BINGO cards for you and your players,
        call random numbers at the click of a button, automatically fill in
        matches, and announce the winner when a card gets a BINGO or a BLACKOUT.
      </p>
    </div>
  );
};

export default About;
