import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { useCart } from "../contexts/CartContext";
import "./Navbar.css";

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  
  // Sample wishlist data
  const wishlistCount = 2;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Shop", path: "/shop" },
    { name: "Checkout", path: "/checkout" },
    { name: "Orders", path: "/orders" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];

  return (
    <header className="home-header sticky-navbar">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/public/image (4).png"
            alt="FASCO"
            className="logo-img"
          />
          <h2 className="text-2xl font-serif font-bold text-gray-800">
            FASCO
          </h2>
        </Link>
      </div>

      <nav className="flex items-center">
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          {navigationItems.map((item) => (
            <li key={item.name} className={location.pathname === item.path ? 'active' : ''}>
              <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <HiBars3CenterLeft />
        </button>
      </nav>

      <div className="header-icons">
        {/* Wishlist */}
        <span className="relative inline-block">
          <div
            className="text-black border-2 rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => alert("Wishlist Clicked")}
          >
            <CiStar size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
        </span>

        {/* Shopping Cart */}
        <span className="relative inline-block">
          <div
            className="text-black border-2 rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <MdOutlineShoppingBasket size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </span>

        {/* Logout */}
        <div
          onClick={() => alert("Logout Clicked")}
          className="text-black border-2 rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <IoMdLogOut size={20} />
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
