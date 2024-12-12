import { Search, ShoppingCart, Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../../Images/snapprintslogo.png"
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState(3);
  const sampleCartItems = [
    {
      id: 1,
      name: "Black T-Shirt",
      price: 29.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200",
    },
    {
      id: 2,
      name: "White Sneakers",
      price: 89.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=200",
    },
  ];
  const cartTotal = sampleCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <nav className="fixed top-0 w-full h-20 bg-gradient-to-r from-white to-gray-100 shadow-lg border-2 border-green-400 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <Link to={"/"}>
          <div className="flex-shrink-0 flex items-center">
          <img src={logo} className="h-[16em] absolute left-2"/>
          </div>
          </Link>


          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <div className="relative flex-1 top-2 max-w-lg">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg bg-white text-white border-2 border-b-4 border-r-4 border-green-400 border-r-green-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-green-500 transition-colors"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex relative top-1 items-center space-x-4">
          <Link to={`/forms/signin`}>
            <button className="px-4 py-2 text-black hover:text-black transition-colors">
              Sign In
            </button>
            </Link>

            <Link to={`/forms/signup`}>
            <button className="px-4 py-2 bg-green-600  rounded-none border-2  border-black text-white transition-colors">
              Sign Up
            </button>
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-black hover:text-black transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile header section */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
            <div className="relative">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-2 text-black hover:text-green-500 transition-colors"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-green-500 transition-colors"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
           <Link to={`/forms/signin`}>
            <button className="w-full px-4 py-2 text-white hover:text-green-500 transition-colors text-left">
              Sign In
            </button>
            </Link>

            <Link to={`/forms/signup`}>
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-left">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      )}

      {/* Cart Drawer Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {sampleCartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 mb-4 pb-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
