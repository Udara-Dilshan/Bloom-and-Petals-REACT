import React, { useState } from "react";
import "./Contact.css";

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (123) 456-7890",
    href: "tel:+11234567890",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@bloomandpetals.com",
    href: "mailto:hello@bloomandpetals.com",
  },
  {
    icon: "📍",
    label: "Address",
    value: "123 Flower Lane, Garden City, NY 10001, USA",
    href: "#",
  },
  {
    icon: "🕐",
    label: "Hours",
    value: "Mon–Sat: 8:00 AM – 7:00 PM\nSunday: 9:00 AM – 5:00 PM",
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      {/* Decorative petal image */}
      <div className="contact__deco" aria-hidden="true">
        <img src="contact.png" alt="" />
        <div className="contact__deco-overlay" />
      </div>

      <div className="contact__inner">
        {/* Left: info */}
        <div className="contact__info">
          <p className="section-label">Get In Touch</p>
          <h2 className="contact__title section-title">
            We'd Love to
            <br />
            <em>Hear From You</em>
          </h2>
          <p className="contact__body">
            Have questions or need help with an order?
            <br />
            We're here for you!
          </p>

          <div className="contact__details">
            {contactInfo.map((item, i) => (
              <div key={i} className="contact__detail">
                <span className="contact__detail-icon">{item.icon}</span>
                <div>
                  <p className="contact__detail-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="contact__detail-value">
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="contact__detail-value"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center image */}
        <div className="contact__image">
          <img src="contact.png" alt="Flower arrangement" />
        </div>

        {/* Right: form */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__form-row">
            <div
              className={`form-field ${errors.name ? "form-field--error" : ""}`}
            >
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="form-field__error">{errors.name}</span>
              )}
            </div>

            <div
              className={`form-field ${errors.email ? "form-field--error" : ""}`}
            >
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="form-field__error">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div
            className={`form-field ${errors.message ? "form-field--error" : ""}`}
          >
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="form-field__error">{errors.message}</span>
            )}
          </div>

          {status === "success" && (
            <div className="contact__success">
              ✓ Message sent! We'll get back to you shortly.
            </div>
          )}

          <button
            type="submit"
            className={`btn-primary contact__submit ${status === "sending" ? "contact__submit--loading" : ""}`}
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <span>Sending…</span>
            ) : (
              <>
                Send Message <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
