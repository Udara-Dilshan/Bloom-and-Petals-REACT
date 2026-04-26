import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Shop", href: "#shop" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner">
        {/* LOGO */}
        <a href="#home" className="navbar__logo">
          <div className="navbar__logo-icon">🌸</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Bloom & Petals</span>
            <span className="navbar__logo-sub">FLOWER SHOP</span>
          </div>
        </a>

        {/* CENTER MENU */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar__link ${
                  activeLink === link.label ? "navbar__link--active" : ""
                }`}
                onClick={() => setActiveLink(link.label)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="navbar__actions">
          <button className="navbar__cart">
            🛒
            {cartCount > 0 && (
              <span className="navbar__cart-badge">{cartCount}</span>
            )}
          </button>

          <a href="#shop" className="navbar__cta btn-primary">
            Order Now →
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          className={`navbar__hamburger ${
            menuOpen ? "navbar__hamburger--open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
