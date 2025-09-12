import { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [isCartOpen, setIsCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]); 
const [giftWrap, setGiftWrap] = useState(false);
const [cartCount, setCartCount] = useState(0);

useEffect(() => {
const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
setCartCount(totalQuantity);
}, [cartItems]);

const subtotal = cartItems.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);
const giftWrapPrice = 10.0;
const freeShippingThreshold = 122.35;
const total = subtotal + (giftWrap ? giftWrapPrice : 0);

const updateQuantity = (id, change) => {
setCartItems((items) =>
 items.map((item) =>
 item.id === id
 ? { ...item, quantity: Math.max(1, item.quantity + change) }
 : item
 ).filter(item => item.quantity > 0) // يمكنك إضافة هذا السطر لحذف المنتج إذا أصبحت كميته 0
);
};

const removeItem = (id) => {
setCartItems((items) => items.filter((item) => item.id !== id));
};

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