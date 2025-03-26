import React from "react";
import styles from "../styles/FavoriteAuthors.module.css"; // Importing CSS module
import author1 from "../assets/author-1.png";
import author2 from "../assets/author-2.png";
import author3 from "../assets/authore-3.png"; // Fixed typo
import author4 from "../assets/authore-4.png"; // Fixed typo

// Dummy authors data
const authors = [
  { id: 1, name: "Warren Grahams", books: 8, image: author1 },
  { id: 2, name: "Randal Adkins", books: 8, image: author2 },
  { id: 3, name: "Randal Adkins", books: 8, image: author3 },
  { id: 4, name: "Allison Tricia", books: 8, image: author4 },
];

const FavoriteAuthors = () => {
  return (
    <section className={styles.authorsSection}>
      <div className={styles.header}>
        <h2>Favorite Authors</h2>
        <button className={styles.viewAll}>View All Authors</button>
      </div>

      <div className={styles.authorsGrid}>
        {authors.map((author) => (
          <div key={author.id} className={styles.authorCard}>
            <img src={author.image} alt={author.name} className={styles.authorImage} /> {/* Fixed src */}
            <h3 className={styles.authorName}>{author.name}</h3>
            <p className={styles.booksCount}>{author.books} Published Books</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoriteAuthors;
