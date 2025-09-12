// src/components/Features/Features.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faBox, faAward } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import React from "react";
import "./Features.css"; // تأكد من أن المسار صحيح

const Features = () => {
  return (
    // استخدم <section> بنفس الفئة الموجودة في HTML
    <section className="features">
      {/* هذا الـ div مهم جداً للتنسيق */}
      <div className="features_container">
        <div className="feature">
          <FontAwesomeIcon icon={faStar} size="2x" />
          <div>
            <h4>High Quality</h4>
            <p>crafted from top materials</p>
          </div>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faAward} size="2x" />
          <div>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faBox} size="2x" />
          <div>
            <h4>Free Shipping</h4>
            <p>Order over 150 $</p>
          </div>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faHeadset} size="2x" />
          <div>
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
