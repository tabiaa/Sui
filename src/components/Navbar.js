import React from 'react';
import logo from '../images/logo.PNG';
import "../Pages/index.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      {/* Header for Desktop (d-none d-lg-block) */}
     
      <header>
        <nav className="navv">
      
          <div className="d-none d-lg-block">
            <a href="../html/index.html">
              <img src={logo} width={25} height={28} style={{ paddingBottom: 3 }} alt="Logo" />
            </a>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <a href="../html/japanese.html">Financial Highlights</a>
            <a href="../html/korean.html">Customer Management</a>
            <a href="../html/pk.html">Investor Information</a>
            <a href="../html/signup.html">New Connections</a>
            <a href="../html/signup.html">Tenders</a>
            <a href="../html/signup.html">Media Center</a>
            <a href="../html/signup.html">HelpLine And Complaints</a>
            <a href="../html/signup.html">R&B Departments</a>
          </div>
        </nav>
      </header>
      {/* Header for Mobile (d-lg-none) */}
      <header className="d-lg-none">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="../html/index.html">
            <img src={logo} width={25} height={28} style={{ paddingBottom: 3 }} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: 'white', border: 'none', fontSize: '16px' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../html/japanese.html">Financial Highlights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../html/korean.html">Customer Management</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../html/pk.html">Invester Infoemation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../html/pk.html">New Connections</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tenders
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Item 1</a>
                  <a className="dropdown-item" href="#">Item 2</a>
                  <a className="dropdown-item" href="#">Item 3</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../html/pk.html">Media Cneters</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../html/pk.html">HelpLine ANd Complaints</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../html/pk.html">R&B Departments</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
