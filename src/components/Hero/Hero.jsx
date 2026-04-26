import React, { useEffect, useRef } from "react";
import "./Hero.css";

const PETALS = Array.from({ length: 12 }, (_, i) => i);

const Hero = () => {
  const petalRef = useRef(null);

  return (
    <section id="home" className="hero">
      {/* Falling petals background */}
      <div className="hero__petals" aria-hidden="true">
        {PETALS.map((i) => (
          <span
            key={i}
            className="hero__petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              fontSize: `${0.6 + Math.random() * 1}rem`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      <div className="hero__inner">
        {/* Left content */}
        <div className="hero__content">
          <p className="section-label hero__label">
            Fresh Flowers, Hand Delivered
          </p>

          <h1 className="hero__title">
            Spread <em>Joy</em> with
            <br />
            Beautiful Flowers
          </h1>

          <p className="hero__subtitle">
            Handpicked blooms for every moment.
            <br />
            Because every occasion deserves to be unforgettable.
          </p>

          <div className="hero__actions">
            <a href="#shop" className="btn-primary hero__btn">
              Shop Now <span className="btn-arrow">→</span>
            </a>
          </div>

          {/* Stats row */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">5K+</span>
              <span className="hero__stat-label">Happy Customers</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">200+</span>
              <span className="hero__stat-label">Flower Varieties</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">Same‑Day</span>
              <span className="hero__stat-label">Delivery Available</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hero__image-wrap">
          <div className="hero__image-bg" />
          <div className="hero__image">
            <img
              src="src/assets/about.png"
              alt="Beautiful flower bouquet"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
