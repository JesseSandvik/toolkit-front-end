import { useNavigate } from 'react-router-dom';
import LoginButton from '../../atoms/buttons/login/LoginButton';
import Navigation from '../../molecules/navigation/Navigiation';
import SignupButton from '../../atoms/buttons/signUp/SignUpButton';

import {appTitle} from '../../appData';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div id="header-left" className="container">
        <span id="app-title" onClick={() => navigate('/')}>
          <h1>{appTitle}</h1>
          <small>new york</small>
        </span>
      </div>
      <div id="header-right" className="container">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
