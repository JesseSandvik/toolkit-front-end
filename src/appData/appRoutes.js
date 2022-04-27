import AboutPage from '../pages/about/About';
import ContactPage from '../pages/contact/Contact';
import GalleryPage from '../pages/gallery/Gallery';
import HomePage from '../pages/home/Home';
import MenuPage from '../pages/menu/Menu';
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
    element: <GalleryPage />,
  },
  {
    name: 'menu',
    path: '/menu',
    element: <MenuPage />,
  },
  {
    name: 'contact',
    path: '/contact',
    element: <ContactPage />,
  }
];
