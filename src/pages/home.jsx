import React, { useState, useEffect, useRef } from 'react';
import '../styles/home-page-styles.css';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [countdown, setCountdown] = useState({
    days: '02',
    hours: '06', 
    minutes: '05',
    seconds: '30'
  });
  
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);
  const testimonialTrackRef = useRef(null);

  const sliderImages = [
      '../../public/dom-hill-nimElTcTNyY-unsplash.jpg',
      '../../public/young-european-woman-jeans-plaid-jacket-poses-portrait-beige-wall.jpg',
    '.../../public/pexels-godisable-jacob-226636-794062.jpg',
    '../../public/raamin-ka-74jERQtN1V4-unsplash.jpg',
    '../../public/p1.jpg',
    '../../public/portrait-pretty-woman-sunglasses-hat-blue-colorful-wall.jpg'
  ];

  const totalSlides = sliderImages.length - 2;

  const testimonials = [
    {
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      stars: '★★★★★',
      name: 'James K.',
      role: 'Traveler'
    },
    {
      image: 'https://i.pinimg.com/originals/8a/76/0c/8a760c2a013aa5d83e0bee58db0fe6c8.jpg',
      text: "This service exceeded my expectations. It made everything easy and stress-free!",
      stars: '★★★★★',
      name: 'Sarah L.',
      role: 'Entrepreneur'
    },
    {
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text: "Amazing experience! I would definitely recommend it to my friends.",
      stars: '★★★★☆',
      name: 'David M.',
      role: 'Photographer'
    }
  ];

  const products = [
    {
      image: '../../public/pexels-kowalievska-1381556.jpg',
      title: 'Shiny Dress',
      brand: 'Al Karam',
      category: 'All Seasons',
      stars: '★★★★★',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
      stock: 'Almost Sold Out'
    },
    {
      image: '../../public/dom-hill-nimElTcTNyY-unsplash.jpg',
      title: 'Long Dress',
      brand: 'Al Karam',
      category: 'All Seasons',
      stars: '★★★★★',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
      stock: 'Almost Sold Out'
    },
    {
      image: '../../public/pexels-minan1398-1163194.jpg',
      title: 'Full Sweater',
      brand: 'Al Karam',
      category: 'All Seasons',
      stars: '★★★★★',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
      stock: 'Almost Sold Out'
    },
    {
      image: '../../public/pexels-frendsmans-1926769.jpg',
      title: 'White Dress',
      brand: 'Al Karam',
      category: 'All Seasons',
      stars: '★★★★★',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
      stock: 'Almost Sold Out'
    },
    {
      image: '/p1.jpg',
      title: 'White Dress',
      brand: 'Al Karam',
      category: 'All Seasons',
      stars: '★★★★★',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
      stock: 'Almost Sold Out'
    },
    {
      image: '/pexels-olly-974911.jpg',
      title: 'White Shirt',
      brand: 'Al Karam',
      category: 'All Seasons',
      stars: '★★★★★',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
      stock: 'Almost Sold Out'
    }
  ];

  const galleryImages = [
    '/nicole-geri-Eb1mX9ds7sc-unsplash.jpg',
    '/dom-hill-JqZlSnI2ctA-unsplash.jpg',
    '/napat-saeng-mVGW8j9rrC4-unsplash.jpg',
    '/pexels-godisable-jacob-226636-914668.jpg',
    '/p1.jpg',
    '/raamin-ka-74jERQtN1V4-unsplash.jpg'
  ];

  useEffect(() => {
    const startCountdown = () => {
      const now = new Date();
      const targetDate = new Date(now.getTime() + (2 * 24 * 60 * 60 * 1000) + (6 * 60 * 60 * 1000) + (5 * 60 * 1000) + (30 * 1000));
      
      const updateCountdown = () => {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference <= 0) {
          setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
          return;
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setCountdown({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      };
      
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return interval;
    };

    const countdownInterval = startCountdown();
    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
      }, 4000);
    };

    startAutoSlide();
    
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [totalSlides]);

  useEffect(() => {
    if (sliderRef.current) {
      const itemWidth = 275; // 250px width + 25px gap
      sliderRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (testimonialTrackRef.current) {
      testimonialTrackRef.current.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    }
  }, [testimonialIndex]);

  const moveSlide = (step) => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    setCurrentIndex(prev => {
      let newIndex = prev + step;
      if (newIndex < 0) newIndex = totalSlides - 1;
      if (newIndex >= totalSlides) newIndex = 0;
      return newIndex;
    });

    setTimeout(() => {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
      }, 4000);
    }, 100);
  };

  const goToSlide = (index) => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    setCurrentIndex(index);

    setTimeout(() => {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
      }, 4000);
    }, 100);
  };

  const nextTestimonial = () => {
    setTestimonialIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handleMouseLeave = () => {
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 4000);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="row hero">
        <div className="col-4 col-s-4 hero-img">
          <img src="/pexels-postiglioni-852860.jpg" alt="Model 1" />
        </div>

        <div className="col-4 col-s-4 hero-center">
          <h1>ULTIMATE</h1>
          <h2>SALE</h2>
          <p>NEW COLLECTION</p>
          <button onClick={() => window.location.href='shop'}>SHOP NOW</button>
          <div className="small-banner">
            <img src="/pexels-athena-2043590.jpg" alt="Small Banner" />
          </div>
        </div>

        <div className="col-4 col-s-4 hero-img">
          <img src="/pexels-frendsmans-1926769.jpg" alt="Model 2" />
        </div>
      </div>

      {/* Deal Section */}
      <div className="row deal-section">
        <div className="col-3 col-s-6 deal-text">
          <h2>Deals Of The Month</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Scelerisque duis ultrices sollicitudin aliquam sem.</p>
          <button className="btn" onClick={() => window.location.href='checkout'}>Buy Now</button>

          <h3>Hurry, Before It's Too Late!</h3>
          <div className="countdown">
            <div><span>{countdown.days}</span><small>Days</small></div>
            <div><span>{countdown.minutes}</span><small>Mins</small></div>
            <div><span>{countdown.seconds}</span><small>Sec</small></div>
          </div>
        </div>
        
        <div className="col-9 col-s-6 deal-slider-section">
          <div className="slider-container">
            <div 
              className="deal-slider" 
              ref={sliderRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {sliderImages.map((img, index) => (
                <img key={index} src={img} alt={`Slide ${index + 1}`} />
              ))}
            </div>
            <button className="slider-btn prev-btn" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="slider-btn next-btn" onClick={() => moveSlide(1)}>&#10095;</button>
            <div className="slider-dots">
              {Array.from({ length: totalSlides }, (_, i) => (
                <span
                  key={i}
                  className={`slider-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="section-header">
        <h2>New Arrivals</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.</p>
      </div>

      <div className="category-buttons">
        <button>Men's Fashion</button>
        <button className="active">Women's Fashion</button>
        <button>Women Accessories</button>
        <button>Men Accessories</button>
        <button>Discount Deals</button>
      </div>

      <div className="new-arrivals">
        {products.map((product, index) => (
          <div key={index} className="col-s-6 col-4">
            <div className="card" onClick={() => window.location.href='checkout.html'} style={{cursor: 'pointer'}}>
              <img src={product.image} alt={product.title} />
              <div className="card-content">
                <h3>{product.title}</h3>
                <div className="brand">{product.brand}</div>
                <div className="category">{product.category}</div>
                <div className="reviews">
                  <div className="stars">{product.stars}</div>
                  <div className="count">{product.reviews}</div>
                </div>
                <div className="price">{product.price}</div>
                <div className="stock">{product.stock}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more">
        <button>Load More</button>
      </div>

      {/* Follow Us Section */}
      <div className="folow-us">
        <h2>Follow Us On Instagram</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultricies sollicitudin aliquam sem.</p>

        <div className="row gallery">
          {galleryImages.map((img, index) => (
            <div key={index} className="col-s-2 col-2">
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>This Is What Our Customers Say</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.</p>

        <div className="testimonial-carousel">
          <div className="testimonial-track" ref={testimonialTrackRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-card">
                  <img src={testimonial.image} alt={`Customer ${index + 1}`} />
                  <p>"{testimonial.text}"</p>
                  <div className="stars">{testimonial.stars}</div>
                  <div className="customer-name">{testimonial.name}</div>
                  <div className="customer-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="testimonial-nav left" onClick={prevTestimonial}>&#10094;</button>
          <button className="testimonial-nav right" onClick={nextTestimonial}>&#10095;</button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="nl-row nl-section">
        <div className="col-3 col-s-12 nl-img-box">
          <img src="/dom-hill-nimElTcTNyY-unsplash.jpg" alt="Male model" />
        </div>

        <div className="col-6 col-s-12">
          <div className="nl-newsletter">
            <h2>Subscribe To Our Newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
              Scelerisque duis ultrices sollicitudin.</p>
            <input type="email" placeholder="michael@ymail.com" />
            <br />
            <button>Subscribe Now</button>
          </div>
        </div>

        <div className="col-3 col-s-12 nl-img-box">
          <img src="/oleg-ivanov-QhR78CbFPoE-unsplash.jpg" alt="Female model" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;