import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/AllCategories.module.css";
import BASE_URL from "../config";

const AllCategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        const groupedCategories = data.reduce((acc, book) => {
          if (!acc[book.category]) acc[book.category] = [];
          acc[book.category].push(book);
          return acc;
        }, {});
        setCategories(groupedCategories);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <img src="src/assets/image.png" alt="banner-img" className={styles.bannerimg} />
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([category, books]) => (
          <section key={category} className={styles.categorySection}>
            <div className={styles.heading}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <br />
              <a href="#" className={styles.viewMore}>
                More {category} &gt;
              </a>
            </div>

            <div className={styles.booksGrid}>
              {books.map((book) => (
                <div key={book.id} className={styles.bookCard}>
                  <Link to={`/product/${book.id}`}>
                    <img src={book.image} alt={book.title} className={styles.bookImage} />
                  </Link>
                  {book.sale && <span className={styles.saleTag}>SALE</span>}
                  {book.countdown && (
                    <div className={styles.countdown}>
                      {book.countdown.split(":").map((time, index) => (
                        <span key={index}>
                          {time} {["Days", "Hours", "Min", "Sec"][index]}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className={styles.bookTitle}>{book.title}</h3>
                  <p className={styles.bookAuthor}>{book.author}</p>
                  <p className={styles.bookPrice}>
                    {book.originalPrice && <span className={styles.oldPrice}>£{book.originalPrice}</span>}
                    <span className={styles.newPrice}>₹{book.price}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default AllCategoriesPage;