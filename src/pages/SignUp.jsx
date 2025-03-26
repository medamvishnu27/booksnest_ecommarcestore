import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Signup = () => {
  return (
    <>
    <Navbar />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow" style={{ width: "750px" }}>
        <h2 className="text-center fw-bold">Create Account</h2>
        <p className="text-center">Please register using account details below.</p>

        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="First Name" required />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Last Name" required />
          </div>

          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>

          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" required />
          </div>

          <button className="createbutton btn btn-dark w-100">Create Account</button>
        </form>

        <div className=" mt-3 text-center" >
          <Link to="/" className="text-dark">Return to Store</Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Signup;
