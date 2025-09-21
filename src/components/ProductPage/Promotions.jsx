import React, { useState, useEffect } from "react";
import "./Promotions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


import image1 from "../../assets/young-european-woman-jeans-plaid-jacket-poses-portrait-beige-wall.jpg";
import image2 from "../../assets/tender-smiling-lady-is-walking-street-posing-casual-modern-coat-hat.jpg";
import image3 from "../../assets/pexels-postiglioni-852860.jpg";
import image4 from "../../assets/pexels-anastasiya-gepp-654466-2065200.jpg";

const Promotions = () => {
  const promos = [
    {
      id: 1,
      img: image1,
      collection: "Summer Collection",
      discount: "25% OFF",
    },
    {
      id: 2,
      img: image2,
      collection: "Business Collection",
      discount: "40% OFF",
    },
    { id: 3, img: image3, collection: "Weekend Casuals", discount: "20% OFF" },
    { id: 4, img: image4, collection: "Elegant Evening", discount: "35% OFF" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 5,
    minutes: 54,
    seconds: 44,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearTimeout(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const itemsToShow = 3;
  const maxIndex = promos.length - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const carouselStyle = {
    transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
  };

  return (
    <section className="promo">
      <div className="promo_container">
        <div className="promo_left">
          <h2>People Also Loved</h2>
          <p>
            Discover more styles our customers are loving right now. Handpicked
            items that perfectly match your taste and complete your look.
          </p>
          <button className="btn">BUY NOW</button>
          <h3>Hurry, Before It's Too Late!</h3>
          <div className="countdown2">
            <div>
              <span>{String(timeLeft.days).padStart(2, "0")}</span>
              <p>Days</p>
            </div>
            <div>
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <p>Hr</p>
            </div>
            <div>
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <p>Mins</p>
            </div>
            <div>
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              <p>Sec</p>
            </div>
          </div>
        </div>

        <div className="promo_right">
          <div className="carousel-viewport">
            <div className="carousel-wrapper" style={carouselStyle}>
              {promos.map((promo) => (
                <div key={promo.id} className="promo_item">
                  <img src={promo.img} alt={promo.collection} />
                  {promo.discount && (
                    <div className="discount">
                      <p>
                        {String(promo.id).padStart(2, "0")} — {promo.collection}
                      </p>
                      <h4>{promo.discount}</h4>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FontAwesomeIcon icon={faChevronLeft} />

            </button>
            <div className="carousel-dots">
              <span className="dot active"></span>
            </div>
            <button
              className="carousel-btn"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
