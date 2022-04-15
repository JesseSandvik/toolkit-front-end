import HomePage from '../pages/home/Home';
import RegisterPage from '../pages/register/Register';

export const appRoutes = [
  {
    name: 'home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'register',
    path: '/register',
    element: <RegisterPage />
  }
];
