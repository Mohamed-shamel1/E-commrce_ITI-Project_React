import { Routes, Route, useLocation } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar.jsx";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/footer.jsx";
import Checkout from "./pages/Checkout.jsx";
import ShoppingCartModal from "./components/ShoppingCartModal.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage.jsx";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password";

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col w-full">
          {/* Show NavBar only if not an auth page */}
          {!isAuthPage && (isHomePage ? <HomeNavbar /> : <Navbar />)}

          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="pt-8 px-6">
                    <h1 className="text-3xl font-bold">Welcome to E-PROVA 🚀</h1>
                    <p className="mt-4 text-gray-600">
                      Click on the shopping cart icon in the navigation bar to view your cart items.
                    </p>
                  </div>
                }
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </Routes>
          </div>

          {/* Show Footer only if not an auth page */}
          {!isAuthPage && <Footer />}

          <ShoppingCartModal />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
