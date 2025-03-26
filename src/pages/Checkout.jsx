import React, { useState } from "react";
import styles from "../styles/Checkout.module.css"; // Import module CSS
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "Telangana",
    zipCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Enter a first name";
    if (!formData.lastName) newErrors.lastName = "Enter a last name";
    if (!formData.address) newErrors.address = "Enter an address";
    if (!formData.city) newErrors.city = "Enter a city";
    if (!formData.zipCode) newErrors.zipCode = "Enter a ZIP / postal code";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setOrderSuccess(true);
      setTimeout(() => {
        setOrderSuccess(false);
        alert("🎉 Order Placed Successfully!");
      }, 3000);
    }
  };

  return (
    <>
    <Navbar />
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <h2>Payment</h2>
        <p>All transactions are secure and encrypted.</p>

        <div className={styles.paymentMethod} style={{margin:"10px"}}>
          <Link className={styles.codButton}>Cash on Delivery (COD)</Link>
        </div>

        <h3 style={{marginBottom:"30px"}}>Billing Address</h3>

        <form onSubmit={handleSubmit} className={styles.addressForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? styles.error : ""}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? styles.error : ""}
            />
          </div>
          {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
          {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? styles.error : ""}
          />
          {errors.address && <span className={styles.errorText}>{errors.address}</span>}

          <div className={styles.formGroup}>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? styles.error : ""}
            />
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="Telangana">Telangana</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
            </select>
            <input
              type="text"
              name="zipCode"
              placeholder="PIN code"
              value={formData.zipCode}
              onChange={handleChange}
              className={errors.zipCode ? styles.error : ""}
            />
          </div>
          {errors.city && <span className={styles.errorText}>{errors.city}</span>}
          {errors.zipCode && <span className={styles.errorText}>{errors.zipCode}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <button type="submit" className={styles.completeOrderButton}>
            Complete Order
          </button>
        </form>

        {orderSuccess && <div className={styles.successMessage}>✅ Order Placed Successfully!</div>}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
