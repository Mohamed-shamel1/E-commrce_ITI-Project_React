import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // 1. استيراد useCart للوصول للـ Context
import '../styles/Cart.css';

const Cart = () => {
    const {
        cartItems,
        updateQuantity,
        removeItem,
        giftWrap,
        setGiftWrap,
        total,
    } = useCart();
    
    const navigate = useNavigate();



    return (
        <>
            <div className="main-container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link> &gt; Your Shopping Cart
                </div>

                <h1 className="page-title">Shopping Cart</h1>

                <div className="cart-table">
                    <div className="cart-header">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                        <div></div>
                    </div>

                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="product-info">
                                    <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.name} className="product-image1" />
                                    <div className="product-details">
                                        <h4>{item.name}</h4>
                                        <div className="color1">Color: {item.color || 'Default'}</div>
                                        <a href="#" onClick={(e) => { e.preventDefault(); removeItem(item.id); }} className="remove">Remove</a>
                                    </div>
                                </div>
                                <div className="price">${item.price.toFixed(2)}</div>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                                    <input type="text" className="quantity-input" value={String(item.quantity).padStart(2, '0')} readOnly />
                                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                </div>
                                <div className="total">${(item.price * item.quantity).toFixed(2)}</div>
                                <div></div>
                            </div>
                        ))
                    ) : (
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <p>Your shopping cart is empty.</p>
                        </div>
                    )}
                </div>

                <div className="gift-wrap-section">
                    <div className="gift-wrap-option">
                        <input 
                            type="checkbox" 
                            id="giftWrap" 
                            checked={giftWrap} 
                            onChange={(e) => setGiftWrap(e.target.checked)} 
                        />
                        <label htmlFor="giftWrap">For $10.00 Please Wrap The Product</label>
                    </div>
                </div>

                <div className="cart-summary">
                    <div className="subtotal-row">
                        <span>Subtotal</span>
                        <span id="subtotal">${total.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn" onClick={() => navigate('/checkout')}>Checkout</button>
                    <Link to="/shop" className="view-cart-link">Continue Shopping</Link>
                </div>
            </div>

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

