import React, { useState, useEffect } from "react";
import "./ProductSection.css";

// تأكد من صحة هذه المسارات في مشروعك المحلي
import brandLogo from "../../assets/Logo-removebg-preview.png";
import visaImg from "../../assets/Visa.jpg";
import masterCardImg from "../../assets/masterCard.jpg";
import mainImgSrc from "../../assets/p1.jpg";
import thumb1 from "../../assets/dom-hill-JqZlSnI2ctA-unsplash.jpg";
import thumb2 from "../../assets/pexels-kowalievska-1381556.jpg";
import thumb3 from "../../assets/dom-hill-nimElTcTNyY-unsplash.jpg";
import thumb4 from "../../assets/pexels-minan1398-1163194.jpg";

const ProductSection = () => {
  const [selectedImg, setSelectedImg] = useState(mainImgSrc);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [quantity, setQuantity] = useState(1);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 1, // تم تعديل الدقائق لتكون متطابقة مع الصورة
    seconds: 32, // تم تعديل الثواني
  });

  const thumbs = [thumb1, thumb2, thumb3, thumb4];
  const sizes = ["M", "L", "XL", "XXL"];
  const colors = [
    { name: "Blue", hex: "blue" },
    { name: "Black", hex: "black" },
    { name: "Pink", hex: "pink" },
  ];
  const totalStock = 9;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <>
      <section className="product_section">
        <div className="product_images">
          <div className="thumbs">
            {thumbs.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Product thumbnail ${idx + 1}`}
                className="thumb"
                onClick={() => setSelectedImg(thumb)}
              />
            ))}
          </div>
          <img src={selectedImg} alt="Main product" className="main_img" />
        </div>

        <div className="product_details">
          <img className="brand" src={brandLogo} alt="Brand logo" />
          <h2>Denim Jacket</h2>

          <div className="rating">
            ★★★★☆ <span style={{ color: "#666", fontSize: "14px" }}>(3)</span>
          </div>

          <div className="price_row">
            <div className="price">$39.00</div>
            <del>$59.00</del>
            <span className="sale">SAVE 33%</span>
          </div>

          <div className="meta">
            <i className="fa-regular fa-eye"></i>
            <span>24 people are viewing this right now</span>
          </div>

          {/* START: UPDATED COUNTDOWN JSX */}
          <div className="countdown1">
      {/* العداد */}
      <div className="countdown-row">
        <div className="countdown-header">
          ⏰ Hurry up! Sale ends in:
        </div>
        <div className="timer-group">
          <div className="time-part">
            <span className="time-value">{formatTime(timeLeft.days)}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-part">
            <span className="time-value">{formatTime(timeLeft.hours)}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-part">
            <span className="time-value">{formatTime(timeLeft.minutes)}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-part">
            <span className="time-value">{formatTime(timeLeft.seconds)}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
          {/* END: UPDATED COUNTDOWN JSX */}


          <div className="stock_text">Only {totalStock} item(s) left in stock!</div>
          <div className="stock_bar">
            <div className="fill" style={{ width: `25%` }}></div>
          </div>

          <div className="sizes">
            <div className="section_label">
              Size: <span style={{ fontWeight: "400" }}>{selectedSize}</span>
            </div>
            {sizes.map((size) => (
              <span
                key={size}
                className={`chip ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            ))}
          </div>

          <div className="colors">
            <div className="section_label">
              Color: <span style={{ fontWeight: "400" }}>{selectedColor}</span>
            </div>
            <div className="colors_row">
              {colors.map((color) => (
                <span
                  key={color.name}
                  className={`color ${selectedColor === color.name ? "active" : ""}`}
                  style={{ background: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                ></span>
              ))}
            </div>
          </div>

          <div className="quantity">
            <div className="section_label">Quantity</div>
            <div className="charr">
              <div className="qty-row">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={() => setQuantity((q) => Math.min(totalStock, q + 1))}>+</button>
              </div>
              <a href="#" className="buy_btn">
                Add to Cart
              </a>
            </div>
          </div>
          
          <div className="extra_info">
            <div className="actions">
              <span><i className="fa-solid fa-code-compare"></i> Compare</span>
              <span><i className="fa-regular fa-circle-question"></i> Ask a question</span>
              <span><i className="fa-solid fa-share-nodes"></i> Share</span>
            </div>

            <div className="delivery">
              <p>
                <i className="fa-solid fa-truck"></i>
                <strong>Estimated Delivery:</strong> Jul 30 - Aug 03
              </p>
              <p>
                <i className="fa-solid fa-box"></i>
                <strong>Free Shipping & Returns:</strong> On all orders over $75
              </p>
            </div>

            <div className="payment">
              <img src={visaImg} alt="Visa" />
              <img src={masterCardImg} alt="Mastercard" />
            </div>

            <p className="guarantee">✅ Guarantee safe & secure checkout</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;