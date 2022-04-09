import {creator} from '../../appData';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div id="footer-center" className="container">
        &copy;{creator} {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
