import './index.css';

const Footer = () => (
  <footer className="footer">
    
    <span className="footer_date" style={{float: 'left'}}>
      {`© ${new Date().getFullYear()} HUSNUL JAHANEER`}
    </span>
   
  </footer>
);

export default Footer;
