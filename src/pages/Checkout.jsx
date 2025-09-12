import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { useCart } from "../contexts/CartContext"; // 1. استيراد useCart
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, subtotal, total } = useCart();

  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    cardHolderName: "",
    saveDelivery: false,
    savePayment: false,
  });

  const [discountCode, setDiscountCode] = useState("");

  
  const shipping = cartItems.length > 0 ? 40.0 : 0; // الشحن بصفر إذا كانت السلة فارغة
  const finalTotal = total + shipping;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, "").replace(/[^0-9]/gi, "");
    let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
    if (formattedValue.length > 19)
      formattedValue = formattedValue.substr(0, 19);
    setFormData((prev) => ({ ...prev, cardNumber: formattedValue }));
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    setFormData((prev) => ({ ...prev, expiryDate: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }
    console.log("Checkout form submitted:", {
        orderItems: cartItems,
        orderDetails: formData,
        total: finalTotal
    });
    alert("Order placed successfully!");
  };

  const applyDiscount = () => {
    if (discountCode.trim()) {
      alert(`Discount code "${discountCode}" applied!`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="py-10">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-center text-3xl font-bold mb-10 text-black">
            FASCO Demo Checkout
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Section */}
                <section className="bg-white">
 <h3 className="text-2xl font-bold mb-4 text-black">Contact</h3>
 <p className="mb-5 text-gray-600">
 Have an account?{" "}
 <Link to="/signup" className="text-blue-600 hover:underline">
 Create Account
 </Link>
 </p>
 <div className="mb-5">
 <label htmlFor="email" className="block mb-2 font-medium text-black">
 Email Address
 </label>
 <input
 type="email"
 id="email"
 name="email"
 value={formData.email}
 style={{ backgroundColor: "white" }}
 onChange={handleInputChange}
 required
 className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-white focus:text-black"
 />
 </div>
</section>

                {/* Delivery Section */}
                <section className="bg-white">
                <h3 className="text-2xl font-bold mb-4 text-black">Delivery</h3>
                <div className="mb-5">
                  <label htmlFor="country" className="block mb-2 font-medium text-black">
                    Country / Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    style={{ backgroundColor: "white" }}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="eg">Egypt</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-medium text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      style={{ backgroundColor: "white" }}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-medium text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      style={{ backgroundColor: "white" }}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="address" className="block mb-2 font-medium text-black">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    style={{ backgroundColor: "white" }}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="city" className="block mb-2 font-medium text-black">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      style={{ backgroundColor: "white" }}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block mb-2 font-medium text-black">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      style={{ backgroundColor: "white" }}
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveDelivery"
                    name="saveDelivery"
                    style={{ backgroundColor: "white" }}
                    checked={formData.saveDelivery}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-black text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="saveDelivery" className="ml-2 font-medium text-black">
                    Save This Info For Future
                  </label>
                </div>
                </section>

                {/* Payment Section */}
                <section className="bg-white">
                <h3 className="text-2xl font-bold mb-4 text-black">Payment</h3>
                <div className="mb-5">
                  <label htmlFor="paymentMethod" className="block mb-2 font-medium text-black">
                    Payment Method
                  </label>
                  <div className="relative">
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      style={{ backgroundColor: "white" }}
                      required
                      className="w-full text-black px-4 py-3 pr-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="cash">Cash on Delivery</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                      <FaCcVisa className="text-xl text-black" />
                      <FaCcMastercard className="text-xl text-black" />
                    </div>
                  </div>
                </div>
                {formData.paymentMethod === "credit-card" && (
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="cardNumber" className="block mb-2 font-medium text-black">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          style={{ backgroundColor: "white" }}
                          onChange={handleCardNumberChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          className="w-full text-black px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="expiryDate" className="block mb-2 font-medium text-black">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          style={{ backgroundColor: "white" }}
                          onChange={handleExpiryDateChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="securityCode" className="block mb-2 font-medium text-black">
                          Security Code
                        </label>
                        <input
                          type="text"
                          id="securityCode"
                          name="securityCode"
                          style={{ backgroundColor: "white" }}
                          value={formData.securityCode}
                          onChange={handleInputChange}
                          placeholder="123"
                          maxLength="4"
                          className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cardHolderName" className="block mb-2 font-medium text-black">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        id="cardHolderName"
                        name="cardHolderName"
                        style={{ backgroundColor: "white" }}
                        value={formData.cardHolderName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
                <div className="flex items-center mt-5 mb-5">
                  <input
                    type="checkbox"
                    id="savePayment"
                    name="savePayment"
                    style={{ backgroundColor: "white" }}
                    checked={formData.savePayment}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-black-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="savePayment" className="ml-2 font-medium text-black">
                    Save This Info For Future
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 text-lg font-semibold rounded-md hover:bg-gray-800 transition-colors"
                >
                  Pay Now
                </button>
                </section>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Order Summary
                </h3>
                
                {/* 5. عرض منتجات السلة الديناميكية أو رسالة السلة الفارغة */}
                <div className="space-y-5 mb-5 border-b border-gray-200 pb-5">
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div className="flex items-center gap-4" key={item.id}>
                                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 relative">
                                    <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                    />
                                    <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-black mb-1 text-sm">
                                        {item.name}
                                    </h4>
                                    {/* <p className="text-gray-600 text-sm">{item.color}</p> */}
                                </div>
                                <div className="text-lg font-semibold text-black">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center">
                            Your cart is empty. <br/> 
                            <Link to="/shop" className="text-blue-600 hover:underline">
                                Continue Shopping
                            </Link>
                        </p>
                    )}
                </div>

                <div className="mb-5">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Discount code"
                      value={discountCode}
                      style={{ backgroundColor: "white" , width: "100%" }}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={applyDiscount}
                      className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="border-t border-gray-200 pt-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="text-gray-700">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700">Shipping</span>
                    <span className="text-gray-700">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-semibold text-black border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;