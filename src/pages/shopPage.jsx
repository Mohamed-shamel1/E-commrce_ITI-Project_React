import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, faAnchor, faList, faS, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import { useCart } from "../contexts/CartContext"; 

import "../styles/ShopPage.css"; // استيراد ملف الـ CSS

const products = [
{
 id: 1,
 name: "Elegant Blazer",
 brand: "al-karam",
 category: "womens",
 collection: "best-sellers",
 price: 95.5,
 size: ["S", "M", "L", "XL"],
 colors: ["black", "navy", "gray"],
 tags: ["formal", "elegant", "professional"],
 image: "product/pexels-kowalievska-1381556.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Professional blazer for modern women",
},
{
 id: 2,
 name: "Long Dress",
 brand: "al-karam",
 category: "womens",
 collection: "new-arrivals",
 price: 95.5,
 size: ["S", "M", "L"],
 colors: ["red", "blue", "black"],
 tags: ["elegant", "casual", "summer"],
 image: "product/dom-hill-nimElTcTNyY-unsplash.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "Almost Sold Out",
 description: "Elegant long dress for special occasions",
},
{
 id: 3,
 name: "Full Sweater",
 brand: "nike",
 category: "womens",
 collection: "best-sellers",
 price: 75.0,
 size: ["M", "L", "XL"],
 colors: ["gray", "black", "white"],
 tags: ["casual", "winter", "comfortable"],
 image: "product/pexels-minan1398-1163194.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Comfortable sweater for cold weather",
},
{
 id: 4,
 name: "White Dress",
 brand: "zara",
 category: "womens",
 collection: "new-arrivals",
 price: 120.0,
 size: ["S", "M", "L", "XL"],
 colors: ["white", "cream"],
 tags: ["elegant", "summer", "formal"],
 image: "product/pexels-frendsmans-1926769.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Classic white dress for summer",
},
{
 id: 5,
 name: "White Shirt",
 brand: "adidas",
 category: "mens",
 collection: "best-sellers",
 price: 45.0,
 size: ["S", "M", "L", "XL"],
 colors: ["white", "blue", "pink"],
 tags: ["formal", "casual", "professional"],
 image: "product/pexels-olly-974911.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Crisp white shirt for formal occasions",
},
{
 id: 6,
 name: "Street Style Jacket",
 brand: "nike",
 category: "mens",
 collection: "new-arrivals",
 price: 85.0,
 size: ["M", "L", "XL"],
 colors: ["black", "gray", "navy"],
 tags: ["casual", "street", "modern"],
 image: "product/napat-saeng-mVGW8j9rrC4-unsplash.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "Almost Sold Out",
 description: "Trendy street style jacket",
},
{
 id: 7,
 name: "Summer Dress",
 brand: "zara",
 category: "womens",
 collection: "new-arrivals",
 price: 65.0,
 size: ["S", "M", "L"],
 colors: ["yellow", "pink", "blue"],
 tags: ["summer", "casual", "light"],
 image: "product/pexels-minan1398-1163194.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Light summer dress for warm days",
},
{
 id: 8,
 name: "Classic Coat",
 brand: "al-karam",
 category: "mens",
 collection: "best-sellers",
 price: 150.0,
 size: ["M", "L", "XL"],
 colors: ["brown", "black", "gray"],
 tags: ["classic", "winter", "formal"],
 image: "product/pexels-frendsmans-1926769.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Timeless classic coat for winter",
},
{
 id: 9,
 name: "Trendy Suit",
 brand: "adidas",
 category: "mens",
 collection: "best-sellers",
 price: 200.0,
 size: ["S", "M", "L", "XL"],
 colors: ["black", "navy", "gray"],
 tags: ["formal", "business", "professional"],
 image: "product/p1.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Modern suit for business meetings",
},
{
 id: 10,
 name: "Fashion Hoodie",
 brand: "nike",
 category: "accessories",
 collection: "new-arrivals",
 price: 55.0,
 size: ["S", "M", "L", "XL"],
 colors: ["black", "gray", "white"],
 tags: ["casual", "comfortable", "sport"],
 image: "product/pexels-olly-974911.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Comfortable hoodie for casual wear",
},
{
 id: 11,
 name: "Designer Bag",
 brand: "zara",
 category: "accessories",
 collection: "best-sellers",
 price: 180.0,
 size: ["one-size"],
 colors: ["brown", "black", "tan"],
 tags: ["luxury", "elegant", "fashion"],
 image: "product/pexels-godisable-jacob-226636-914668.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "Almost Sold Out",
 description: "Luxury designer bag for fashionistas",
},
{
 id: 12,
 name: "Premium Watch",
 brand: "adidas",
 category: "accessories",
 collection: "new-arrivals",
 price: 250.0,
 size: ["one-size"],
 colors: ["silver", "gold", "black"],
 tags: ["premium", "elegant", "gentleman"],
 image: "product/pexels-aizhana-aldanova-364644-983564.jpg",
 reviews: 4.1,
 reviewCount: 4100,
 stock: "In Stock",
 description: "Elegant premium watch for gentlemen",
},
];

const ShopPage = () => {
  const { addToCart } = useCart();

const [isCartVisible, setIsCartVisible] = useState(false);
const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);
const [isToastVisible, setIsToastVisible] = useState(false);
const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

const [selectedSize, setSelectedSize] = useState("M");
const [selectedColor, setSelectedColor] = useState(null);
const [selectedTags, setSelectedTags] = useState([]);

useEffect(() => {
 if (isToastVisible) {
 const timer = setTimeout(() => {
  setIsToastVisible(false);
 }, 3000);
 return () => clearTimeout(timer);
 }
}, [isToastVisible]);

useEffect(() => {
 if (isCartVisible || isMobileFilterVisible) {
 document.body.style.overflow = "hidden";
 } else {
 document.body.style.overflow = "auto";
 }
}, [isCartVisible, isMobileFilterVisible]);

const handleAddToCart = (productToAdd) => {
    addToCart(productToAdd); // استدعاء الدالة من CartContext
    setIsToastVisible(true); // نبين التنبيه كما هو
};

const renderFilters = () => (
 <>
 <div className="filter-section">
  <h4 className="filter-title">Collections</h4>
  <div className="filter-options">
  {["All Products", "Best Sellers", "New Arrivals", "Accessories"].map(
   (item) => (
   <label className="filter-option" key={item}>
    <input
    type="checkbox"
    value={item.toLowerCase().replace(" ", "-")}
    defaultChecked={item === "All Products"}
    />
    <span className="checkmark"></span>
    {item}
   </label>
   )
  )}
  </div>
 </div>

 <div className="filter-section">
  <h4 className="filter-title">Size</h4>
  <div className="size-options">
  {["S", "M", "L", "XL"].map((size) => (
   <button
   key={size}
   className={`size-btn ${selectedSize === size ? "active" : ""}`}
   onClick={() => setSelectedSize(size)}
   >
   {size}
   </button>
  ))}
  </div>
 </div>

 <div className="filter-section">
  <h4 className="filter-title">Color</h4>
  <div className="color-options">
  {[
   { name: "red", code: "#ff6b6b" },
   { name: "blue", code: "#4dabf7" },
   { name: "green", code: "#51cf66" },
   { name: "yellow", code: "#ffd43b" },
   { name: "purple", code: "#9775fa" },
   { name: "pink", code: "#f783ac" },
   { name: "orange", code: "#ff8787" },
   { name: "black", code: "#333" },
  ].map((color) => (
   <button
   key={color.name}
   className={`color-btn ${
    selectedColor === color.name ? "active" : ""
   }`}
   style={{ backgroundColor: color.code }}
   onClick={() => setSelectedColor(color.name)}
   ></button>
  ))}
  </div>
 </div>

 <div className="filter-section">
  <h4 className="filter-title">Price Range</h4>
  <div className="filter-options">
  {[
   "$0 - $50",
   "$50 - $100",
   "$100 - $150",
   "$150 - $200",
   "$200 - $250",
   "$300 - $400",
  ].map((range) => (
   <label className="filter-option" key={range}>
   <input type="checkbox" value={range} />
   <span className="checkmark"></span>
   {range}
   </label>
  ))}
  </div>
 </div>

 <div className="filter-section">
  <h4 className="filter-title">Brands</h4>
  <div className="filter-options">
  {["Al Karam", "Nike", "Adidas", "Zara"].map((brand) => (
   <label className="filter-option" key={brand}>
   <input type="checkbox" value={brand.toLowerCase()} />
   <span className="checkmark"></span>
   {brand}
   </label>
  ))}
  </div>
 </div>

 <div className="filter-section">
  <h4 className="filter-title">Tags</h4>
  <div className="tags-cloud">
  {["Casual", "Formal", "Sport", "Vintage", "Modern", "Elegant"].map(
   (tag) => (
   <button
    key={tag}
    className={`tag-btn ${
    selectedTags.includes(tag) ? "active" : ""
    }`}
    onClick={() => {
    const newTags = selectedTags.includes(tag)
     ? selectedTags.filter((t) => t !== tag)
     : [...selectedTags, tag];
    setSelectedTags(newTags);
    }}
   >
    {tag}
   </button>
   )
  )}
  </div>
 </div>

 <div className="filter-actions">
  <button className="clear-filters">Clear All Filters</button>
 </div>
 </>
);

return (
 <>
 {/* Hero Section */}
 <div className="shop-hero">
  <div className="hero-content">
  <h1>SHOP OUR COLLECTION</h1>
  <p>Discover the latest trends in fashion and style</p>
  <button className="shop-cta">EXPLORE NOW</button>
  </div>
 </div>

 <div className="shop-container">

  <aside className="sidebar-filters" id="sidebar-filters">
  <div className="filter-header">
   <h3>Filters</h3>

  </div>
  {renderFilters()}
  </aside>


  <main className="main-content">

  <div className="products-header">
   <div className="results-info">

   <button
    className="filter-toggle"
    onClick={() => setIsMobileFilterVisible(true)}
   >
    <FontAwesomeIcon icon={["fas", "th"]} />
    Filters
   </button>
   <h2>Products</h2>
   <span className="results-count" id="results-count">
    {products.length} products
   </span>
   </div>

   <div className="products-controls">
   <div className="view-toggle">
    <button
    className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
    onClick={() => setViewMode("grid")}
    >
    <FontAwesomeIcon icon={faList} />

    </button>
    <button
    className={`view-btn ${viewMode === "list" ? "active" : ""}`}
    onClick={() => setViewMode("list")}
    >
    <FontAwesomeIcon icon={faAnchor} />
    </button>
   </div>

   <div className="sort-controls">
    <label htmlFor="sort-select">Sort by:</label>
    <select id="sort-select">
    <option value="featured">Featured</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
    <option value="newest">Newest First</option>
    <option value="name-asc">Name: A to Z</option>
    <option value="name-desc">Name: Z to A</option>
    </select>
   </div>
   </div>
  </div>

  <div
   className={`products-grid ${
   viewMode === "list" ? "list-view" : ""
   }`}
   id="products-grid"
  >
   {products.map((product) => (
   <div className="product-card" key={product.id}>
    <div className="product-image">
    <img src={`${import.meta.env.BASE_URL}${product.image }`}alt={product.name} loading="lazy" />
    <div className="product-overlay">
     <button className="quick-view-btn">Quick View</button>
    </div>
    </div>
    <div className="product-content">
    <h3 className="product-title">{product.name}</h3>
    <div className="product-brand">
     {product.brand.replace("-", " ").toUpperCase()}
    </div>
    <div className="product-category">{product.category}</div>
    <div className="product-reviews">
     <div className="stars">
     {"★".repeat(Math.floor(product.reviews))}
     {"☆".repeat(5 - Math.floor(product.reviews))}
     </div>
     <div className="review-count">
     ({product.reviewCount / 1000}k) Customer Reviews
     </div>
    </div>
    <div className="product-price">
     ${product.price.toFixed(2)}
    </div>
    <div className="product-stock">{product.stock}</div>
                    {/* 4. تحديث onClick لتمرير المنتج الحالي للدالة */}
    <button 
                      className="add-to-cart-btn" 
                      onClick={() => handleAddToCart(product)}
                    >
     Add to Cart
    </button>
    </div>
   </div>
   ))}
  </div>

  <div className="load-more">
   <button id="load-more-btn">Load More Products</button>
  </div>
  </main>
 </div>

 <div className="folow-us">
  <h2>Follow Us On Instagram</h2>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
  duis ultricies sollicitudin aliquam sem.
  </p>
  <div className="row gallery">
  <div className="col-s-2 col-2">
   <img src={`${import.meta.env.BASE_URL}product/nicole-geri-Eb1mX9ds7sc-unsplash.jpg`} alt="Model 1" />
  </div>
  <div className="col-s-2 col-2">
   <img src={`${import.meta.env.BASE_URL}product/dom-hill-JqZlSnI2ctA-unsplash.jpg`} alt="Model 2" />
  </div>
  <div className="col-s-2 col-2">
   <img
   src={`${import.meta.env.BASE_URL}product/napat-saeng-mVGW8j9rrC4-unsplash.jpg`}
   alt="Black Dress"
   />
  </div>
  <div className="col-s-2 col-2">
   <img
   src={`${import.meta.env.BASE_URL}product/pexels-godisable-jacob-226636-914668.jpg`}
   alt="Elegant Blazer"
   />
  </div>
  <div className="col-s-2 col-2">
   <img src={`${import.meta.env.BASE_URL}product/p1.jpg`} alt="Summer Dress" />
  </div>
  <div className="col-s-2 col-2">
   <img
   src={`${import.meta.env.BASE_URL}product/raamin-ka-74jERQtN1V4-unsplash.jpg`}
   alt="Fashion Hoodie"
   />
  </div>
  </div>
 </div>

 <div
  className={`mini-cart-overlay ${isCartVisible ? "active" : ""}`}
  onClick={() => setIsCartVisible(false)}
 >
  <div className="mini-cart-sidebar" onClick={(e) => e.stopPropagation()}>
  <div className="mini-cart-header">
   <h3>Shopping Cart</h3>
   <button
   className="close-cart"
   onClick={() => setIsCartVisible(false)}
   >
   <i className="fas fa-times"></i>
   </button>
  </div>
  <div className="mini-cart-items">
   <p style={{ textAlign: "center", padding: "20px" }}>
   Your cart is empty.
   </p>
  </div>
  <div className="mini-cart-footer">
   <div className="cart-total">
   <span>Total:</span>
   <span className="total-amount">$0.00</span>
   </div>
   <button className="checkout-btn">Checkout</button>
   <button className="view-cart-btn">View Full Cart</button>
  </div>
  </div>
 </div>

 <div
  id="cart-toast"
  className={`cart-toast ${isToastVisible ? "show" : ""}`}
 >
  <i className="fas fa-check-circle"></i>
  <span>Product added to cart!</span>
 </div>

 <div
  className={`mobile-filter-overlay ${
  isMobileFilterVisible ? "active" : ""
  }`}
  onClick={() => setIsMobileFilterVisible(false)}
 >
  <div
  className="mobile-filter-sidebar"
  onClick={(e) => e.stopPropagation()}
  >
  <div className="mobile-filter-header">
   <h3>Filters</h3>
   <button
   className="close-filters"
   onClick={() => setIsMobileFilterVisible(false)}
   >
   <i className="fas fa-times"></i>
   </button>
  </div>
  <div className="mobile-filter-content">{renderFilters()}</div>
  </div>
 </div>
 </>
);
};

export default ShopPage;