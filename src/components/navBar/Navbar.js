import React, { Component } from "react";
import logo from "../../assets/LogoImg.png";
import "./NavbarStyles.css";
export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg fixhealth_navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="navbar_logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <span class="navbar-text navbar_booknow_btn">Book Now</span>
          </div>
        </div>
      </nav>
    );
  }
}
