import React from 'react';
import {  Routes, Route } from 'react-router-dom'; // Correct import
import LandingPage from './components/LandingPage';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import AllCategoriesPage from './store/AllCategoriesPage';
import Biography from './store/Biography';
import History from './store/History';
import Romanticbooks from './store/Romaticbooks.jsx';
import Thriller from './store/Thriller';
import ProductDetails from './pages/ProductDetails';
import { CartWishlistProvider } from './pages/CartWishlistContext.jsx';
import Wishlist from "./pages/Wishlist.jsx"

const App = () => {
  return (
   
      <CartWishlistProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allcategories" element={<AllCategoriesPage />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/history" element={<History />} />
          <Route path="/romanticbooks" element={<Romanticbooks />} />
          <Route path="/thriller" element={<Thriller />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </CartWishlistProvider>
   
  );
};

export default App;