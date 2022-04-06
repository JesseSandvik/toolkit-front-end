import {creator} from '../../appData';

const Footer = () => {
  return (
    <footer role="contentinfo">
      &copy;{creator} {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
