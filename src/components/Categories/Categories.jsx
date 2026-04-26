import React, { useState } from "react";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Birthday\nFlowers",
    color: "#FFF0F3",
    accent: "#E8577A",
    emoji: "🎂",
    img: "src/assets/1.1.png",
  },
  {
    id: 2,
    name: "Anniversary\nFlowers",
    color: "#FFF5F0",
    accent: "#D4567A",
    emoji: "💍",
    img: "src/assets/1.2.png",
  },
  {
    id: 3,
    name: "Congratulations\nFlowers",
    color: "#FFFFF0",
    accent: "#C9A84C",
    emoji: "🎉",
    img: "src/assets/1.3.png",
  },
  {
    id: 4,
    name: "Sympathy\nFlowers",
    color: "#F5F5FF",
    accent: "#6B7DB3",
    emoji: "🕊️",
    img: "src/assets/1.4.png",
  },
  {
    id: 5,
    name: "Just Because\nFlowers",
    color: "#F0FFF5",
    accent: "#4CAF8C",
    emoji: "💐",
    img: "src/assets/1.5.png",
  },
];

const Categories = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="categories" className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="section-label">Shop by Category</p>
          <h2 className="section-title">Find the Perfect Blooms</h2>
        </div>

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#shop"
              className={`cat-card ${hovered === cat.id ? "cat-card--hovered" : ""}`}
              style={{
                animationDelay: `${i * 0.08}s`,
                "--accent": cat.accent,
                "--bg": cat.color,
              }}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="cat-card__img-wrap">
                <img src={cat.img} alt={cat.name.replace("\n", " ")} />
                <div className="cat-card__overlay" />
              </div>
              <div className="cat-card__content">
                <p className="cat-card__name">
                  {cat.name.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j === 0 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
