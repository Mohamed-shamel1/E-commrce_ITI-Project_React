import { createContext, useContext, useState, useEffect } from 'react';
import { initialCartItems } from '../data/cartData.js';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [giftWrap, setGiftWrap] = useState(false);
  const [cartCount, setCartCount] = useState(
    cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  // Update cart count when cart items change
  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const giftWrapPrice = 10.0;
  const freeShippingThreshold = 122.35;
  const total = subtotal + (giftWrap ? giftWrapPrice : 0);

  // Update quantity
  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((items) => {
      const existingItem = items.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return items.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...items, { ...item, quantity: 1 }];
      }
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    giftWrap,
    setGiftWrap,
    cartCount,
    subtotal,
    giftWrapPrice,
    freeShippingThreshold,
    total,
    updateQuantity,
    removeItem,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
