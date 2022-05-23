import AboutPage from '../pages/about/About';
import ContactPage from '../pages/contact/Contact';
import GalleryPage from '../pages/gallery/Gallery';
import HomePage from '../pages/home/Home';
import MenuPage from '../pages/menu/Menu';
import RegisterPage from '../pages/register/Register';

export const routes = [
  {
    name: 'home',
    path: '/',
    element: <HomePage />,
    mainNav: false,
  },
  {
    name: 'about',
    path: '/about',
    element: <AboutPage />,
    mainNav: true,
    position: 'left'
  },
  {
    name: 'gallery',
    path: '/gallery',
    element: <GalleryPage />,
    mainNav: true,
    position: 'left'
  },
  {
    name: 'menu',
    path: '/menu',
    element: <MenuPage />,
    mainNav: true,
    position: 'right'
  },
  {
    name: 'contact',
    path: '/contact',
    element: <ContactPage />,
    mainNav: true,
    position: 'right'
  }
];
