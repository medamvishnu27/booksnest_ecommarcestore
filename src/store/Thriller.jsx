import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../styles/Category.module.css';
import BASE_URL from "../config";
import banner from "../assets/image.png"




const Thriller = () => {
  const [thrillerBooks, setThrillerBooks] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products?category=Thriller`)
      .then((response) => response.json())
      .then((data) => setThrillerBooks(data))
      .catch((error) => console.error('Error fetching thriller books:', error));
  }, []);

  return (
    <>
    <Navbar />
    <div>
        <img src={banner} alt="banner-img" className={styles.bannerimg} />
      </div>
    <div className={styles.categoryContainer}>
      <h1>Thriller Books</h1>
      <div className={styles.booksGrid}>
        {thrillerBooks.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <Link to={`/product/${book.id}`}>
              <img src={book.image} alt={book.title} className={styles.bookImage} />
            </Link>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookAuthor}>{book.author}</p>
            <p className={styles.bookPrice}>₹{book.price}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Thriller;