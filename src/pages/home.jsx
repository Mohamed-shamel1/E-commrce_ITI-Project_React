import { useState, useEffect, useRef } from 'react';

export default function Home() {
    // State for mobile nav
    const [navOpen, setNavOpen] = useState(false);
    // Slider state
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const sliderImages = [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500",
    ];

    // Testimonial state
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const testimonials = [
        {
            img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            name: "James K.",
            role: "Traveler",
            stars: 5,
        },
        {
            img: "https://i.pinimg.com/originals/8a/76/0c/8a760c2a013aa5d83e0bee58db0fe6c8.jpg",
            text: "This service exceeded my expectations. It made everything easy and stress-free!",
            name: "Sarah L.",
            role: "Entrepreneur",
            stars: 5,
        },
        {
            img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Amazing experience! I would definitely recommend it to my friends.",
            name: "David M.",
            role: "Photographer",
            stars: 4,
        },
    ];

    // Slider dots logic
    const goToSlide = (idx) => setCurrentIndex(idx);
    const moveSlide = (step) => {
        setCurrentIndex((prev) => {
            let next = prev + step;
            if (next < 0) return sliderImages.length - 1;
            if (next >= sliderImages.length) return 0;
            return next;
        });
    };

    // Testimonial carousel logic
    const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
    const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    // Responsive nav toggle
    const handleMenuToggle = () => setNavOpen((v) => !v);

    // Slider scroll effect
    useEffect(() => {
        if (sliderRef.current) {
            const itemWidth = sliderRef.current.children[0]?.offsetWidth + 15 || 0;
            sliderRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }, [currentIndex]);

    // Product data (for new arrivals)
    const products = [
        {
            img: "https://i.pinimg.com/736x/c4/ca/d2/c4cad2557df0b9abbf9ceaa040c61396.jpg",
            name: "Elegant Blazer",
            price: "$95.50",
        },
        {
            img: "https://i.pinimg.com/1200x/08/8a/6b/088a6b275e43dfc58da4dbf7064b22a2.jpg",
            name: "Street Style Jacket",
            price: "$95.50",
        },
        {
            img: "https://i.pinimg.com/736x/39/61/f1/3961f1a1ea5217526ed1e983bd4d3f99.jpg",
            name: "Summer Dress",
            price: "$95.50",
        },
        {
            img: "https://i.pinimg.com/736x/e0/14/37/e01437426591052bc61a03612fe0e502.jpg",
            name: "Classic Coat",
            price: "$95.50",
        },
        {
            img: "https://i.pinimg.com/736x/a4/e4/e8/a4e4e8b8dd4f084c506f71d0f35af6e1.jpg",
            name: "Trendy Suit",
            price: "$95.50",
        },
        {
            img: "https://i.pinimg.com/736x/68/b4/b9/68b4b99981fb23b898414712a3d2b013.jpg",
            name: "Fashion Hoodie",
            price: "$95.50",
        },
    ];

    // Gallery images
    const galleryImgs = [
        "https://i.pinimg.com/736x/77/b6/b7/77b6b7424950070583bbf9b6f2aea6e7.jpg",
        "https://i.pinimg.com/736x/c3/5c/c5/c35cc56530e808a0a4d3b3bde5047428.jpg",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        "https://i.pinimg.com/736x/c4/ca/d2/c4cad2557df0b9abbf9ceaa040c61396.jpg",
        "https://i.pinimg.com/736x/39/61/f1/3961f1a1ea5217526ed1e983bd4d3f99.jpg",
        "https://i.pinimg.com/736x/68/b4/b9/68b4b99981fb23b898414712a3d2b013.jpg",
    ];

    return (
        <div>
            {/* Styles moved to App.css */}

            {/* Header */}
            {/* <div className="header">
                <a href="#"><img src="/scr/Logo-removebg-preview.png" alt="Logo" style={{ width: 'min-content' }} /></a>
                <button className="menu-toggle" aria-label="Open navigation menu" onClick={handleMenuToggle}>
                    &#9776;
                </button>
                <ul className={`nav-list${navOpen ? ' show' : ''}`}>
                    <li><a href="#">deals</a></li>
                    <li><a href="#">new arrivals</a></li>
                    <li><a href="#">contact us</a></li>
                    <li><a href="#">sign in</a></li>
                    <li><a href="#">register</a></li>
                </ul>
            </div> */}

            {/* Hero Section */}
            <div className="row hero">
                <div className="col-4 col-s-4 hero-img">
                    <img src="https://i.pinimg.com/736x/77/b6/b7/77b6b7424950070583bbf9b6f2aea6e7.jpg" alt="Model 1" />
                </div>
                <div className="col-4 col-s-4 hero-center">
                    <h1>ULTIMATE</h1>
                    <h2>SALE</h2>
                    <p>NEW COLLECTION</p>
                    <button>SHOP NOW</button>
                    <div className="small-banner">
                        <img src="https://i.ytimg.com/vi/IfWYDcVfBVo/maxresdefault.jpg" alt="Small Banner" />
                    </div>
                </div>
                <div className="col-4 col-s-4 hero-img">
                    <img src="https://i.pinimg.com/736x/c3/5c/c5/c35cc56530e808a0a4d3b3bde5047428.jpg" alt="Model 2" />
                </div>
            </div>

            {/* Deal Section with Slider */}
            <div className="row deal-section">
                <div className="col-3 col-s-6 deal-text">
                    <h2>Deals Of The Month</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.</p>
                    <button className="btn">Buy Now</button>
                    <h3>Hurry, Before It’s Too Late!</h3>
                    <div className="countdown">
                        <div><span>02</span><small>Days</small></div>
                        <div><span>06</span><small>Hr</small></div>
                        <div><span>05</span><small>Mins</small></div>
                        <div><span>30</span><small>Sec</small></div>
                    </div>
                </div>
                <div className="col-9 col-s-6 deal-slider-section">
                    <div className="slider-container">
                        <div className="deal-slider" ref={sliderRef} style={{ display: 'flex', gap: 15, transition: 'transform 0.4s ease-in-out' }}>
                            {sliderImages.map((src, i) => (
                                <img key={i} src={src} alt={`Slide ${i + 1}`} style={{ flex: '0 0 auto', width: '100%', maxWidth: 250, borderRadius: 10 }} />
                            ))}
                        </div>
                        <button className="slider-btn prev-btn" onClick={() => moveSlide(-1)}>&#10094;</button>
                        <button className="slider-btn next-btn" onClick={() => moveSlide(1)}>&#10095;</button>
                        <div className="slider-dots">
                            {sliderImages.map((_, i) => (
                                <span key={i} className={`slider-dot${i === currentIndex ? ' active' : ''}`} onClick={() => goToSlide(i)} />
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
            <div className="new-arrivals" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((p, i) => (
                    <div className="col-s-6 col-4" key={i} style={{ flex: '1 0 33%', maxWidth: 350 }}>
                        <div className="card">
                            <img src={p.img} alt={p.name} style={{ width: 300, height: 300, objectFit: 'cover' }} />
                            <h3>{p.name}</h3>
                            <p>{p.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Instagram Gallery */}
            <div className="folow-us">
                <h2>Follow Us On Instagram</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultricies sollicitudin aliquam sem.</p>
                <div className="row gallery">
                    {galleryImgs.map((src, i) => (
                        <div className="col-s-2 col-2" key={i}><img src={src} alt={`Gallery ${i + 1}`} /></div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="testimonials">
                <h2>This Is What Our Customers Say</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.</p>
                <div className="testimonial-carousel">
                    <div className="testimonial-track" style={{ display: 'flex', transform: `translateX(-${testimonialIndex * 100}%)`, transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)' }}>
                        {testimonials.map((t, i) => (
                            <div className="testimonial-item" key={i} style={{ minWidth: '100%', boxSizing: 'border-box', padding: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="testimonial-card">
                                    <img src={t.img} alt={`Customer ${i + 1}`} style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', marginBottom: 18, border: '3px solid #7c4dff', boxShadow: '0 2px 8px rgba(124,77,255,0.08)' }} />
                                    <p>"{t.text}"</p>
                                    <div className="stars">{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
                                    <div className="customer-name">{t.name}</div>
                                    <div className="customer-role">{t.role}</div>
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
                    <img src="https://i.pinimg.com/736x/39/61/f1/3961f1a1ea5217526ed1e983bd4d3f99.jpg" alt="Male model" />
                </div>
                <div className="col-6 col-s-12">
                    <div className="nl-newsletter">
                        <h2>Subscribe To Our Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.</p>
                        <input type="email" placeholder="michael@ymail.com" />
                        <br />
                        <button>Subscribe Now</button>
                    </div>
                </div>
                <div className="col-3 col-s-12 nl-img-box">
                    <img src="https://i.pinimg.com/736x/77/b6/b7/77b6b7424950070583bbf9b6f2aea6e7.jpg" alt="Female model" />
                </div>
            </div>

            {/* Footer */}
            {/* <footer className="nl-footer">
                <div className="nl-footer-top">
                    <div className="nl-footer-logo"><img src="/scr/Logo-removebg-preview.png" alt="" /></div>
                    <nav className="nl-footer-nav">
                        <a href="#">Support Center</a>
                        <a href="#">Invoicing</a>
                        <a href="#">Contract</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">FAQ,s</a>
                    </nav>
                </div>
                <div className="nl-footer-bottom">
                    Copyright © 2022 Xpro . All Rights Reserved.
                </div>
            </footer> */}
        </div>
    );
}