import React from "react";
import styles from "../styles/ContactUs.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactimg from "../../public/image.png"

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={contactimg} alt="banner-img" className={styles.bannerimg} />
      </div>

      <section className={styles.contactSection}>
        <h2 className={styles.heading}>Let's get in touch</h2>
        <div className={styles.container}>
          {/* Contact Info Section */}
          <div className={styles.contactInfo}>
            <div className={styles.infoBox}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h3>Address:</h3>
                <p>123 Suspendis eccums american</p>
              </div>
            </div>
            <div className={styles.infoBox}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h3>Email:</h3>
                <p>info@example.com</p>
              </div>
            </div>
            <div className={styles.infoBox}>
              <FaPhoneAlt className={styles.icon} />
              <div>
                <h3>Call Us:</h3>
                <p>+1 23 445 789 00</p>
              </div>
            </div>
            <p className={styles.openingTime}>
              Opening time: Our store has re-opened for shopping, exchanges every day 11am to 7pm
            </p>
          </div>

          {/* Contact Form Section */}
          <div className={styles.contactForm}>
            <form>
              <input type="text" placeholder="Name" className={styles.input} />
              <input type="email" placeholder="Email" className={styles.input} />
              <input type="text" placeholder="Subject" className={styles.input} />
              <textarea placeholder="Message" className={styles.textarea}></textarea>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
