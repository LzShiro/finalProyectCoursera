import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="header" aria-label="Main site header">
      <div className="logo">
        <img src="/LittleLemonLogo.png" alt="Little Lemon Logo" />
      </div>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
      >
        ☰
      </button>
      <Nav
        className={`nav ${isMenuOpen ? "open" : ""}`}
        onNavigate={closeMenu}
        navId="main-navigation"
      />
    </header>
  );
};

export default Header;
