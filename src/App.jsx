import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar.jsx";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/footer.jsx";
import Checkout from "./pages/Checkout.jsx";
import ShoppingCartModal from "./components/ShoppingCartModal.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import ShopPage from "./pages/shopPage.jsx";
import HomePage from "./pages/home.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./pages/Cart.jsx";
import Loader from "./components/Loader.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col w-full">
          {loading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
              <Loader />
            </div>
          )}

          {!isAuthPage && (isHomePage ? <HomeNavbar /> : <Navbar />)}

          <div className="flex-1">
            <Routes>
              <Route path="/products" element={<ProductPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/orders" element={<Cart />} />
            </Routes>
          </div>

          {!isAuthPage && <Footer />}
          <ShoppingCartModal />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
