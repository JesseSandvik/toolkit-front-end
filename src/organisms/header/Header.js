import LoginButton from '../../atoms/buttons/login/LoginButton';
import Navigation from '../../molecules/navigation/Navigiation';
import SignupButton from '../../atoms/buttons/signUp/SignUpButton';

const Header = () => {
  return (
    <header>
      <div id="header-left" className="container">
        <h1>toolkit client</h1>
      </div>
      <div id="header-right" className="container">
        <Navigation />
        <SignupButton />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
