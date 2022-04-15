import {NavLink} from 'react-router-dom';

const NavigationLink = ({children, path}) => {
  return <NavLink to={path}>{children}</NavLink>;
};

export default NavigationLink;
