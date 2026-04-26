import React, { useState } from "react";
import "./About.css";

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Fresh & Handpicked",
    desc: "We use the freshest flowers for lasting beauty.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h6l-3 4" />
        <path d="M5 21a2 2 0 100-4 2 2 0 000 4zM19 21a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    title: "Same-Day Delivery",
    desc: "Order before 2 PM and we'll deliver today.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Secure Payments",
    desc: "Shop with confidence using our safe checkout.",
  },
];

const About = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* ── Left: Video / Image ── */}
        <div className="about__media">
          <div className="about__img-frame">
            <img src="logo.png" alt="Florist arranging flowers" />
            <div className="about__img-overlay" />
          </div>

          {/* Decorative blob */}
          <div className="about__blob" aria-hidden="true" />
        </div>

        {/* ── Right: Content ── */}
        <div className="about__content">
          <p className="section-label">About Us</p>
          <h2 className="about__title section-title">
            Where Flowers
            <br />
            <em>Tell Your Story</em>
          </h2>

          <p className="about__body">
            At Bloom &amp; Petals, we believe flowers are more than just gifts —
            they're heartfelt expressions. We source the freshest blooms and
            craft each arrangement with love, care, and creativity.
          </p>
          <p className="about__body">
            From our shop to your doorstep, we make every moment bloom
            beautifully.
          </p>

          {/* Features */}
          <div className="about__features">
            {features.map((f, i) => (
              <div key={i} className="about__feature">
                <div className="about__feature-icon">{f.icon}</div>
                <div>
                  <h4 className="about__feature-title">{f.title}</h4>
                  <p className="about__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
