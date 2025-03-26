import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Login = () => {
  return (
    <>
    <Navbar />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow" style={{ width: "600px", background: "#f5f5f5" }}>
        <h2 className="text-center fw-bold">Login</h2>
        <p className="text-center">Please login using account details below.</p>

        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>

          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" required />
          </div>

          <button className="Signinbutton btn btn-dark w-100">Sign In</button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <Link to="/forgot-password" className="text-dark">Forgot your password?</Link>
          <Link to="/signup" className="text-dark">Create account</Link>
        </div>
      </div>
    </div>
    <Footer />

    </>
  );
};

export default Login;
