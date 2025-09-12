import React, { useState } from 'react';
import '../styles/Cart.css'; // Import the CSS file
import productImage from '/p1.jpg'; // Make sure to have the image in the correct path

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const [isGiftWrapped, setIsGiftWrapped] = useState(false);

    const basePrice = 14.90;
    const giftWrapPrice = 10.00;

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    
    const handleGiftWrapChange = (event) => {
        setIsGiftWrapped(event.target.checked);
    };

    const itemTotal = basePrice * quantity;
    const subtotal = itemTotal + (isGiftWrapped ? giftWrapPrice : 0);

    return (
        <>
            {/* Main Content */}
            <div className="main-container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <a href="index.html">Home</a> &gt; Your Shopping Cart
                </div>

                {/* Page Title */}
                <h1 className="page-title">Shopping Cart</h1>

                {/* Cart Table */}
                <div className="cart-table">
                    <div className="cart-header">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                        <div></div>
                    </div>

                    <div className="cart-item">
                        <div className="product-info">
                            <img src={productImage} alt="Mini Dress" className="product-image1" />
                            <div className="product-details">
                                <h4>Mini Dress With Ruffled Straps</h4>
                                <div className="color">Color: Red</div>
                                <a href="#" className="remove">Remove</a>
                            </div>
                        </div>
                        <div className="price">${basePrice.toFixed(2)}</div>
                        <div className="quantity-controls">
                            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                            <input type="text" className="quantity-input" value={quantity.toString().padStart(2, '0')} readOnly />
                            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                        </div>
                        <div className="total" id="itemTotal">${itemTotal.toFixed(2)}</div>
                        <div></div>
                    </div>
                </div>

                {/* Gift Wrap Section */}
                <div className="gift-wrap-section">
                    <div className="gift-wrap-option">
                        <input type="checkbox" id="giftWrap" checked={isGiftWrapped} onChange={handleGiftWrapChange} />
                        <label htmlFor="giftWrap">For $10.00 Please Wrap The Product</label>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="cart-summary">
                    <div className="subtotal-row">
                        <span>Subtotal</span>
                        <span id="subtotal">${subtotal.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn" onClick={() => window.location.href='/checkout'}>Checkout</button>
                    <a href="/shop" className="view-cart-link">Continue Shopping</a>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="main-container">
                <div className="newsletter-section">
                    <h2>Subscribe To Our Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam aem, scelerisque duis ultrices sollicitudin.</p>
                    <form className="newsletter-form">
                        <input type="email" className="newsletter-input" placeholder="Shamel460@gmail.com" defaultValue="Shamel460@gmail.com" />
                        <button type="submit" className="newsletter-btn">Subscribe Now</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Cart;