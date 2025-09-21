import React, { useState } from "react";
import "./Newsletter.css";

import leftImg from "../../assets/dom-hill-nimElTcTNyY-unsplash.jpg";
import rightImg from "../../assets/oleg-ivanov-QhR78CbFPoE-unsplash.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email!");
    }
  };

  return (
    <section className="newsletter_container">
      {/* Left image */}
      <div className="newsletter_img">
        <img src={leftImg} alt="Newsletter left" />
      </div>

      {/* Center content */}
      <div className="newsletter_section">
        <h2>Subscribe To Our Newsletter</h2>
        <p>Stay updated with our latest offers, new products, and special discounts.</p>
        <form className="newsletter_form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="User@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>

      {/* Right image */}
      <div className="newsletter_img">
        <img src={rightImg} alt="Newsletter right" />
      </div>
    </section>
  );
};

export default Newsletter;
