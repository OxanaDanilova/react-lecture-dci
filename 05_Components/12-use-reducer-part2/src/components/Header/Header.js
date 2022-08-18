import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <img src="images/birdy.png" className="logo" alt="logo" />
      <h1 className="twitter-blue">Zwitscher</h1>
    </div>
  );
}

export default Header;
