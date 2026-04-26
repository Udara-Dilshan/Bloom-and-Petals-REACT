import React, { useState } from "react";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Blush Romance",
    price: "$49.99",
    tag: "Bestseller",
    img: "2.1.png",
  },
  {
    id: 2,
    name: "Pure Happiness",
    price: "$59.99",
    tag: "New",
    img: "2.2.png",
  },
  {
    id: 3,
    name: "Sunny Delight",
    price: "$44.99",
    tag: null,
    img: "2.3.png",
  },
  {
    id: 4,
    name: "Sweet Moments",
    price: "$54.99",
    tag: "Popular",
    img: "2.4.png",
  },
  {
    id: 5,
    name: "Timeless Love",
    price: "$69.99",
    tag: "Premium",
    img: "2.5.png",
  },
  {
    id: 6,
    name: "Garden Whisper",
    price: "$47.99",
    tag: null,
    img: "2.6.png",
  },
];

const ProductCard = ({ product, index }) => {
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="product-card__img-wrap">
        <img src={product.img} alt={product.name} loading="lazy" />

        {product.tag && (
          <span className="product-card__tag">{product.tag}</span>
        )}

        <button
          className={`product-card__wish ${wishlist ? "product-card__wish--active" : ""}`}
          onClick={() => setWishlist(!wishlist)}
          aria-label="Add to wishlist"
        >
          {wishlist ? "♥" : "♡"}
        </button>

        <div className="product-card__hover-actions">
          <button className="product-card__quick" aria-label="Quick view">
            👁 Quick View
          </button>
        </div>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__stars" aria-label="5 stars">
          {"★".repeat(5)}
        </div>
        <div className="product-card__footer">
          <span className="product-card__price">{product.price}</span>
          <button
            className={`product-card__add ${added ? "product-card__add--done" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added" : "+ Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <section id="shop" className="featured">
      <div className="featured__inner">
        <div className="featured__header">
          <p className="section-label">Featured Collections</p>
          <h2 className="section-title">Our Most Loved Arrangements</h2>
        </div>

        <div className="featured__grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="featured__footer">
          <a href="#shop" className="btn-primary">
            View All Products <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
