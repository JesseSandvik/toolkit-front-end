import AboutPage from '../pages/about/About';
import Gallery from '../pages/gallery/Gallery';
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
    element: <AboutPage />,
  },
  {
    name: 'gallery',
    path: '/gallery',
    element: <Gallery />,
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
