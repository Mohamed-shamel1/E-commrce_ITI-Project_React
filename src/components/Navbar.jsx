import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useCart } from "../contexts/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  // State for wishlist
  const [wishlistCount] = useState(2);

  // Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header>
        <nav className="bg-white">
          <div className={`transition-all ${isScrolled ? "p-2" : "p-7"}`}>
            <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                  <IconButton
                    className="block lg:hidden text-gray-600"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    <HiBars3CenterLeft size={20} />
                  </IconButton>
                  <Link to="/" className="flex items-center">
                    <img
                      src={`${import.meta.env.BASE_URL}product/image (4).png`}
                      alt="FASCO"
                      className="w-10 h-10"
                    />
                    <h1
                      className="text-xl font-bold ml-2"
                      style={{
                        fontFamily: "serif",
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "35px",
                      }}
                    >
                      FASCO
                    </h1>
                  </Link>
                </div>

                {/* Links */}
                <ul className="hidden xl:flex items-center gap-6 text-sm">
                  {[
                    "Home",
                    "Products",
                    "Shop",
                    "Checkout",
                    "Orders",
                    "Login",
                    "Signup",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        className="px-6 py-2 bg-white text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300 rounded-lg"
                        to={`/${item.toLowerCase()}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Right Section */}
                <div className="flex items-center gap-4">
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
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{ sx: { width: "250px" } }}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
        </div>
        <List>
            {["Home", "Products", "Shop", "Checkout", "Orders", "Login", "Signup"].map(
            (item) => (
              <ListItem
                button
                key={item}
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to={`/${item.toLowerCase()}`}
                className="text-black hover:bg-gray-100 transition-colors"
              >
                <ListItemText primary={item} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}