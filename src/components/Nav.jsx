import { Link } from 'react-router-dom';
import solologo from '../assets/solologo.png';

const Nav = ({ openHireModal }) => {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img src={solologo} alt="Solo logo" style={{ height: 28, display: 'block' }} />
      </Link>
      <ul className="nav-links">
        <li><a href="/#services">Services</a></li>
        <li><a href="/#work">Work</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#faq">FAQ</a></li>
        <li><Link to="/links">Links</Link></li>
      </ul>
      <button onClick={openHireModal} className="nav-hire" style={{ border: 'none', cursor: 'pointer' }}>Hire Me</button>
    </nav>
  );
};



export default Nav;
