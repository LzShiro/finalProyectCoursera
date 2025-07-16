import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu  = () => setIsMenuOpen(false);
  return (
    <header className="header">
      <div className="logo">
        <img src="/LittleLemonLogo.png" alt="Little Lemon Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <Nav className={`nav ${isMenuOpen ? "open" : ""}`} onNavigate={closeMenu} />
    </header>
  );
}

export default Header;