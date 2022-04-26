import HomePage from '../pages/home/Home';
import RegisterPage from '../pages/register/Register';

export const appRoutes = [
  {
    name: 'home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'about',
    path: '/about',
    element: <HomePage />,
  },
  {
    name: 'gallery',
    path: '/gallery',
    element: <HomePage />,
  },
  {
    name: 'menu',
    path: '/menu',
    element: <HomePage />,
  },
  {
    name: 'contact',
    path: '/contact',
    element: <HomePage />,
  }
];
