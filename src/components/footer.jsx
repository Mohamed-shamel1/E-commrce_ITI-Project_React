import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name - Left */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="/public/image (4).png"
                alt="FASCO"
                className="w-8 h-8 mr-2"
              />
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                FASCO
              </h2>
            </Link>
          </div>

          {/* Copyright - Center */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 text-center">
              Copyright © {new Date().getFullYear()} FASCO. All Rights Reserved
            </p>
          </div>

          {/* Navigation Menu - Right */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Shop
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Products
            </Link>
            
            {/* Pages Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* <button
                className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200 flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Pages
                <svg
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button> */}
              
              {/* Dropdown Menu */}
              <div className={`absolute bottom-full right-0 mb-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 transition-all duration-200 z-20 ${
                isDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform translate-y-2'
              }`}>
                <div className="py-1">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/privacy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Hidden on Desktop */}
        <div className="md:hidden mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};