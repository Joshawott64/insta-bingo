const Navbar = ({ showAbout, setShowAbout }) => {
  return (
    <div>
      <p>Insta-BINGO</p>
      <button onClick={() => setShowAbout(!showAbout)}>About</button>
    </div>
  );
};

export default Navbar;
