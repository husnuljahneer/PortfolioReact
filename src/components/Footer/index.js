import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    
    <span className="footer_date">
      {`© ${new Date().getFullYear()} HUSNUL JAHANEER`}
    </span>
   
  </footer>
);

export default Footer;
