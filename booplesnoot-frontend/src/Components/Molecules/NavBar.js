import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="/images/logo.png" className="logo" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item active mr-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mr-3">
            <Link to="/About" className="nav-link">
                About
            </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/Recipes" className="nav-link">
                Recipes
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link to="/RegisterPage" className="nav-link">
                Register
                <i className="fas fa-user-plus pl-2"></i>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/LoginPage" className="nav-link">
                Login
                <i className="fas fa-sign-in-alt pl-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
