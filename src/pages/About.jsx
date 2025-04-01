import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Styles from "../styles/SubscribeSection.module.css"
import About from "../assets/Aboutbooks.png"
import Aboutbook from "../assets/Aboutus-book.png"
import freeshipping from "../assets/FreeShiping'.png"
import cartimg from "../assets/Cardsimage.png"
import imgbox from "../assets/imagebox.png"


const ExperienceCard = () => {
  return (
    <>
    <Navbar/>
  
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <img
            src={About}
            alt="Woman Reading Book"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Content Section */}
        <div className="col-md-6 position-relative">
          <h2 className="fw-bold display-6">
            Since 1987, We have established ourselves with a strong reputation.
          </h2>
          <p className="mt-3 fs-5 fw-semibold">Win Best Book Shop Award in 2023.</p>
          <p className="text-muted">
            Accepting the award, Dunki's visionary founder expressed gratitude for
            the team's dedication and the patronage of discerning clients who
            appreciate the finer things in life. This win marks a milestone in
            Dunki's journey, solidifying its position as a trailblazer in the
            realm of exquisite adornments.
          </p>
{/* 
          Circular Badge
          <div className="position-absolute start-0 translate-middle-x mt-4">
            <div className="bg-danger text-white rounded-circle d-flex flex-column align-items-center justify-content-center" 
                 style={{ width: "130px", height: "130px" }}>
              <p className="mb-0 small">Good Experience</p>
              <p className="mb-0 small">In Last</p>
              <p className="fs-1 fw-bold">10</p>
              <p className="mb-0 small">Years</p>
            </div>
          </div> */}

          {/* Button */}
          <button className="btn btn-dark btn-lg mt-5">
            Explore More
          </button>
        </div>
      </div>
    </div>

{/*  2nd*/}

    <div className={Styles.SubscribeSection} style={{backgroundColor:"#A1D0B9"}}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-bold">Join the community</h2>
            <p className="text-muted">
              Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.
            </p>
            <div className="d-flex mt-3">
              <input
                type="email"
                className={Styles.custominput}
                placeholder="email@example.com"
              />
              <button className={Styles.custombtn}>Subscribe</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            <img src={Aboutbook} alt="Book" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    {/* 3rd card */}

    <div className="container my-5">
      <div className="row text-center">
        {/* First Feature */}
        <div className="col-md-4">
          <div className="feature-item">
            <img
              src={freeshipping} // Replace with the correct path
              alt="Shipping Box"
              className="feature-icon"
            />
            <h5 className="feature-title">Free Shipping</h5>
            <p className="feature-text">Order over $100 and  More</p>
          </div>
        </div>

        {/* Second Feature */}
        <div className="col-md-4">
          <div className="feature-item">
            <img
              src={cartimg} // Replace with the correct path
              alt="Secure Payment"
              className="feature-icon"
            />
            <h5 className="feature-title">Free Shipping</h5>
            <p className="feature-text">100% Secure Payment</p>
          </div>
        </div>

        {/* Third Feature */}
        <div className="col-md-4">
          <div className="feature-item">
            <img
              src={imgbox} // Replace with the correct path
              alt="Return Box"
              className="feature-icon"
            />
            <h5 className="feature-title">Free Shipping</h5>
            <p className="feature-text">Within 10 Days Returns</p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  

    </>
  );
};

export default ExperienceCard;
