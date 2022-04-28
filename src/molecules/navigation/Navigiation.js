import ListItem from '../../atoms/listItem/ListItem';
import NavigationLink from '../../atoms/navLink/NavLink';
import UList from '../../atoms/uList/UList';

const Navigation = ({routes}) => {
  const routesList = routes.filter(route => route.mainNav === true).map((route, index) => (
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
