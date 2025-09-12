import React from "react";
import Promotions from "../components/ProductPage/Promotions";
import Newsletter from "../components/ProductPage/Newsletter";
import ProductSection from "../components/ProductPage/ProductSection";
import Features from "../components/ProductPage/Features";
import "../styles/ProductPage.css";
import { useCart } from "../contexts/CartContext"; // 1. استيراد useCart


const ProductPage = () => {
  return (
    <>
      <ProductSection />
      <Features />
      <Promotions />
      <Newsletter />
    </>
  );
};

export default ProductPage;
