import React from "react";
import styles from "../styles/Offer.module.css"; // Importing CSS module
import { NavLink } from "react-router-dom";
import book1 from "src/assets/offerimg-1.png"
import book2 from "src\assets\offerimg-2.png"
const Offer = () => {
  return (
    <div className={styles.offerSection}>
      {/* Left Offer Card */}
      <div className={`${styles.offerCard} ${styles.orangeBg}`}>
        <div className={styles.offerContent}>
          <p>Up To 20% Off</p>
          <h2>Best Weekend</h2>
          <a to="" className={styles.shopNow}>Shop Now</a>
        </div>
        <div className={styles.offerImage}>
          <img src={book1} alt="Book Offer" />
        </div>
      </div>

      {/* Right Offer Card */}
      <div className={`${styles.offerCard} ${styles.yellowBg}`}>
        <div className={styles.offerContent}>
          <p>Special Offer</p>
          <h2>Nice Bookshelf.</h2>
          <a to="" className={styles.shopNow}>Shop Now</a>
        </div>
        <div className={styles.offerImage}>
          <img src={book2} alt="Book Offer" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
