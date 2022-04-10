import LoginButton from '../../atoms/buttons/login/LoginButton';
import Navigation from '../../molecules/navigation/Navigiation';

const Header = () => {
  return (
    <header>
      <div id="header-left" className="container">
        <h1>toolkit client</h1>
      </div>
      <div id="header-right" className="container">
        <Navigation />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
