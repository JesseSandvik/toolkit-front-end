import ListItem from '../../atoms/listItem/ListItem';
import NavigationLink from '../../atoms/navLink/NavLink';
import UList from '../../atoms/uList/UList';

import {appRoutes} from '../../appData/appRoutes';

const Navigation = () => {
  const routesList = appRoutes.map((route, index) => (
    <ListItem key={index}>
      <NavigationLink path={route.path}>{route.name}</NavigationLink>
    </ListItem>
  ));
  return (
    <nav>
      <UList>{routesList}</UList>
    </nav>
  );
};

export default Navigation;
