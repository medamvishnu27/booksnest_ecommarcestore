import React, { createContext, useState, useEffect } from "react";

export const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlistItems, setWishlistItems] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cartItems)), [cartItems]);
  useEffect(() => localStorage.setItem("wishlist", JSON.stringify(wishlistItems)), [wishlistItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.find((item) => item.id === product.id)
        ? prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        : [...prevItems, { ...product, quantity: 1 }]
    );
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.some((item) => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const moveToWishlist = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    addToWishlist(product);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <CartWishlistContext.Provider value={{ cartItems, setCartItems, wishlistItems, addToCart, moveToWishlist, removeFromCart, removeFromWishlist }}>
      {children}
    </CartWishlistContext.Provider>
  );
};
