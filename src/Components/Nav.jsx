import { Link } from 'react-router-dom';

const Nav = ({ className = "", onNavigate, navId = "main-navigation" }) => {
  return (
    <nav id={navId} className={className} aria-label="Main navigation">
      <ul>
        <li><Link to="/" onClick={onNavigate}>Home</Link></li>
        <li><Link to="/about" onClick={onNavigate}>About</Link></li>
        <li><Link to="/menu" onClick={onNavigate}>Menu</Link></li>
        <li><Link to="/booking" onClick={onNavigate}>Reservations</Link></li>
        <li><Link to="/order-online" onClick={onNavigate}>Order Online</Link></li>
        <li><Link to="/login" onClick={onNavigate}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;