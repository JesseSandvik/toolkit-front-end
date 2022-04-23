import {useNavigate} from 'react-router-dom';

const SignUpButton = () => {
  const navigate = useNavigate();
  return (
    <button id="signup-btn" className="header-btn" onClick={() => navigate('/register')}>
      sign up
    </button>
  );
};

export default SignUpButton;
