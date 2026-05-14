import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-logo">Solo<span>.</span></Link>
      <ul className="nav-links">
        <li><a href="/#services">Services</a></li>
        <li><a href="/#work">Work</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#faq">FAQ</a></li>
        <li><Link to="/links">Links</Link></li>
      </ul>
      <a href="/#contact" className="nav-hire">Hire Me</a>
    </nav>
  );
};


export default Nav;
