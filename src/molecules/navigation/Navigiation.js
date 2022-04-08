import ListItem from '../../atoms/listItem/ListItem';
import NavigationLink from '../../atoms/navLink/NavLink';
import UList from '../../atoms/uList/UList';

const Navigation = () => {
  return (
    <nav>
      <UList>
        <ListItem>
          <NavigationLink />
        </ListItem>
      </UList>
    </nav>
  );
};

export default Navigation;
