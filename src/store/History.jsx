import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Category.module.css';
import  Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BASE_URL from "../config";
import banner from "../assets/image.png"

const History = () => {
  const [historyBooks, setHistoryBooks] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products?category=History`)
      .then((response) => response.json())
      .then((data) => setHistoryBooks(data))
      .catch((error) => console.error('Error fetching history books:', error));
  }, []);

  return (
    <>
    <Navbar />
    <div>
        <img src={banner} alt="banner-img" className={styles.bannerimg} />
      </div>
    <div className={styles.categoryContainer}>
      <h1>History Books</h1>
      <div className={styles.booksGrid}>
        {historyBooks.map((book) => (
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

export default History;