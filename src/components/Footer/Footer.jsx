import React from "react";
import "./Footer.css";

const footerLinks = {
  "Quick Links": ["Home", "Shop", "About Us", "Blog", "Contact"],
  Occasions: [
    "Birthday",
    "Anniversary",
    "Congratulations",
    "Sympathy",
    "Just Because",
  ],
  Support: ["FAQ", "Shipping Policy", "Returns", "Track Order", "Gift Cards"],
};

const socials = [];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">🌸</span>
              <div>
                <span className="footer__logo-name">Bloom &amp; Petals</span>
                <span className="footer__logo-sub">FLOWER SHOP</span>
              </div>
            </div>
            <p className="footer__tagline">
              Crafting beautiful floral arrangements that speak from the heart.
              Every bloom, every moment, every smile.
            </p>

            {/* Newsletter */}
            <div className="footer__newsletter">
              <p className="footer__newsletter-label">
                Get 10% off your first order
              </p>
              <div className="footer__newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button className="footer__newsletter-btn">Subscribe</button>
              </div>
            </div>

            {/* Socials */}
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="footer__social"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer__col">
              <h4 className="footer__col-title">{title}</h4>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__col-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © 2026 Bloom &amp; Petals. All rights reserved.~ Udara Dilshan ~
          </p>
          <div className="footer__bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
