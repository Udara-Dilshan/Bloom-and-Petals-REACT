import React, { useState, useEffect, useCallback } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "The bouquet was absolutely stunning and delivered right on time. The flowers stayed fresh for over two weeks! Highly recommend Bloom & Petals to anyone looking for quality arrangements.",
  },
  {
    id: 2,
    name: "Michael Smith",
    location: "Chicago, USA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Beautiful flowers, great packaging, and excellent customer service. Ordered for my wife's birthday and she was in tears of joy. Will definitely be a returning customer!",
  },
  {
    id: 3,
    name: "Sarah Williams",
    location: "Los Angeles, USA",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "I've ordered from many florists but Bloom & Petals is by far the best. The arrangements are creative, the flowers are always fresh, and the delivery is always on time.",
  },
  {
    id: 4,
    name: "James Davis",
    location: "Miami, USA",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Ordered a sympathy arrangement and the team was so thoughtful and caring. The flowers were gorgeous and made such a meaningful gift during a difficult time.",
  },
];

const Stars = ({ count }) => (
  <div className="stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "star star--filled" : "star"}>
        ★
      </span>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const perView = 2;
  const total = testimonials.length;

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      if (dir === "next") {
        setCurrent((prev) => (prev + 1) % (total - perView + 1));
      } else {
        setCurrent((prev) => Math.max(0, prev - 1));
      }
    },
    [total],
  );

  useEffect(() => {
    const timer = setInterval(() => go("next"), 5000);
    return () => clearInterval(timer);
  }, [go]);

  const visible = testimonials.slice(current, current + perView);

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <p className="section-label">What Our Customers Say</p>
          <h2 className="section-title">Customer Love</h2>
        </div>

        <div className="testimonials__slider">
          {/* Prev */}
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={() => go("prev")}
            disabled={current === 0}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Cards */}
          <div className="testimonials__track">
            {visible.map((t) => (
              <div key={t.id} className={`testi-card testi-card--${direction}`}>
                <Stars count={t.rating} />
                <blockquote className="testi-card__quote">
                  "{t.text}"
                </blockquote>
                <div className="testi-card__author">
                  <img
                    className="testi-card__avatar"
                    src={t.avatar}
                    alt={t.name}
                  />
                  <div>
                    <p className="testi-card__name">{t.name}</p>
                    <p className="testi-card__location">
                      <span>📍</span> {t.location}
                    </p>
                  </div>
                  <div className="testi-card__quote-icon">"</div>
                </div>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={() => go("next")}
            disabled={current >= total - perView}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials__dots" role="tablist">
          {Array.from({ length: total - perView + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              className={`testimonials__dot ${i === current ? "testimonials__dot--active" : ""}`}
              onClick={() => {
                setDirection(i > current ? "next" : "prev");
                setCurrent(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
