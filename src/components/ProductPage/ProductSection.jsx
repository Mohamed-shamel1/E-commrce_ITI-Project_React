import React, { useState, useEffect } from "react";
import "./ProductSection.css"; // Assuming CSS is handled globally or in a different structure

const brandLogo = "product/image (4).png";
const visaImg = "product/Visa.jpg";
const masterCardImg = "product/masterCard.jpg";
const mainImgSrc = "product/young-european-woman-jeans-plaid-jacket-poses-portrait-beige-wall.jpg";
const thumb1 = "product/pexels-frendsmans-1926769.jpg";
const thumb2 = "product/oleg-ivanov-QhR78CbFPoE-unsplash.jpg";
const thumb3 = "product/pexels-godisable-jacob-226636-794062.jpg";
const thumb4 = "product/pexels-godisable-jacob-226636-914668.jpg";

import { useCart } from "../../contexts/CartContext"; // Corrected path assumption

const ProductSection = () => {
  const { addToCart } = useCart();

  const [selectedImg, setSelectedImg] = useState(mainImgSrc);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [quantity, setQuantity] = useState(1);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 1,
    seconds: 32,
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

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isToastVisible]);

  const handleAddToCart = () => {
    const productToAdd = {
        id: `denim-jacket-${selectedColor.toLowerCase()}-${selectedSize.toLowerCase()}`,
        name: "Denim Jacket",
        price: 39.00,
        image: mainImgSrc, // Use the main image for the cart
        quantity: quantity,
        color: selectedColor,
        size: selectedSize,
    };
    addToCart(productToAdd);
    setIsToastVisible(true);
  };

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <>
      <section className="product_section">
        <div className="product_images">
          <div className="thumbs">
            {thumbs.map((thumb, idx) => (
              <img
                key={idx}
                src={`${import.meta.env.BASE_URL}${thumb}`}
                alt={`Product thumbnail ${idx + 1}`}
                className={`thumb ${selectedImg === thumb ? "active" : ""}`}
                onClick={() => setSelectedImg(thumb)}
              />
            ))}
          </div>
          <img src={`${import.meta.env.BASE_URL}${selectedImg}`} alt="Main product" className="main_img" />
        </div>

        <div className="product_details">
          <img className="brand" src={`${import.meta.env.BASE_URL}${brandLogo}`} alt="Brand logo" />
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
            <span role="img" aria-label="eye icon">👁️</span>
            <span>24 people are viewing this right now</span>
          </div>

          <div className="countdown1">
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

          <div className="stock_text">Only {totalStock} item(s) left in stock!</div>
          <div className="stock_bar">
            <div className="fill" style={{ width: `${(totalStock / 20) * 100}%` }}></div>
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
              <button onClick={handleAddToCart} className="buy_btn2">
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="extra_info">
            <div className="actions">
                <span><span role="img" aria-label="compare icon">🔄</span> Compare</span>
                <span><span role="img" aria-label="question icon">❓</span> Ask a question</span>
                <span><span role="img" aria-label="share icon">🔗</span> Share</span>
            </div>

            <div className="delivery">
                <p>
                    <span role="img" aria-label="truck icon">🚚</span>
                    <strong> Estimated Delivery:</strong> Jul 30 - Aug 03
                </p>
                <p>
                    <span role="img" aria-label="box icon">📦</span>
                    <strong> Free Shipping & Returns:</strong> On all orders over $75
                </p>
            </div>

            <div className="payment">
                <img src={`${import.meta.env.BASE_URL}${visaImg}`} alt="Visa" />
                <img src={`${import.meta.env.BASE_URL}${masterCardImg}`} alt="Mastercard" />
            </div>

            <p className="guarantee">✅ Guarantee safe & secure checkout</p>
          </div>
        </div>
      </section>

      <div id="cart-toast" className={`cart-toast ${isToastVisible ? "show" : ""}`}>
        <span role="img" aria-label="check icon" style={{ marginRight: '8px' }}>✔️</span>
        <span>Product added to cart!</span>
      </div>
    </>
  );
};

export default ProductSection;

