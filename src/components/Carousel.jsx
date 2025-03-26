import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Carousel.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner1 from "../assets/bannerimg-1.png"
import banner2 from "../assets/bannerimg-2.png"
import banner3 from "../assets/bannerimg-3.png"
import banner4 from "../assets/bannerimg-4.png"

const images = [
  banner1,
  banner2,
  banner3,
  banner4,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleUserInteraction = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-slide after 5 seconds
  };

  return (
    <div className={styles.carousel} onMouseEnter={handleUserInteraction}>
      <button className={styles.prev} onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <div className={styles.imageContainer}>
        <Link to="/allcategories"><img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} /></Link>
     
      </div>
      <button className={styles.next} onClick={nextSlide}>
        <FaArrowRight />
      </button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ""
              }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
