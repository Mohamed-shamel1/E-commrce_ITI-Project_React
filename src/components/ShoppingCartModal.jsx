import { Link } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useCart } from "../contexts/CartContext";

const ShoppingCartModal = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    giftWrap,
    setGiftWrap,
    subtotal,
    giftWrapPrice,
    freeShippingThreshold,
    total,
    updateQuantity,
  } = useCart();

  return (
    <Dialog
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      className="relative z-[60]"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <DialogTitle className="text-xl font-semibold text-gray-900">
                    Shopping Cart
                  </DialogTitle>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 bg-white hover:border-white"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-700" />
                  </button>
                </div>

                {/* Free Shipping Banner */}
                <div className="px-6 py-3 bg-green-50 border-b border-green-100">
                  <p className="text-sm text-green-700">
                    <span className="font-medium">
                      Buy ${freeShippingThreshold.toFixed(2)} More And Get{" "}
                    </span>
                    <span className="font-bold">Free Shipping</span>
                  </p>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto max-h-96">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-6 border-b border-gray-100"
                      >
                        <div className="flex gap-4">
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            {item.onSale && (
                              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                -{item.salePercentage}%
                              </div>
                            )}
                          </div>

                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              Color: {item.color} | Size: {item.size}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {item.originalPrice && (
                                  <span className="text-sm text-gray-400 line-through">
                                    ${item.originalPrice.toFixed(2)}
                                  </span>
                                )}
                                <span className="font-semibold text-gray-900">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 bg-gray-300 rounded-md ">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="p-1 bg-gray-300"
                                >
                                  <MinusIcon className="h-4 w-4 text-black" />
                                </button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="p-1 bg-gray-300"
                                >
                                  <PlusIcon className="h-4 w-4 text-black" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center">
                      <p className="text-gray-500">Your cart is empty</p>
                    </div>
                  )}
                </div>

                {/* Gift Wrap Option */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="w-4 h-4 
             text-black       
             bg-white         
             border border-black  
             rounded 
             focus:ring-0 focus:ring-offset-0"
                    />

                    <span className="text-sm text-gray-700">
                      For ${giftWrapPrice.toFixed(2)} Please Wrap The Product
                    </span>
                  </label>
                </div>

                {/* Subtotal */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Subtotal
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 space-y-3">
                  <Link
                    to="/checkout"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors block text-center"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Checkout
                  </Link>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-white text-black py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ShoppingCartModal;
