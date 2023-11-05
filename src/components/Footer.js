import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../images/logo.PNG'
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
        
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
               Sui Southern Gas Company
              </h6>
              <p>
              Mr. Amir Mumtaz Khan
General Manager (Coordination)
Sui Southern Gas Co. Ltd.
Sir Shah Suleman Road,
Gulshan e Iqbal,
Karachi.
Tel: +9221-99224713
Email: amir.mumtaz@ssgc.com.pk
              </p>
            </div>
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className='color-changing-text'> LPG ORDER NOW</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@ssgc.com.pk
              </p>
              <p><i className="fas fa-phone me-3"></i> 1199, 99021000 </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">TabiaAlam</a>
      </div>
    </footer>
  );
};

export default Footer;
