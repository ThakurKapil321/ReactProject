import "../CSS/Footer.css"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">CarZone</div>
      <p className="footer-text">Find your perfect car with amazing prices and features.</p>

      <div className="footer-icons">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>

      <p className="footer-bottom">© {new Date().getFullYear()} CarZone. All rights reserved.</p>
    </footer>
  );
}

export default Footer;