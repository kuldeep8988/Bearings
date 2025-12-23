import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <>
     
    {/* ===== HEADER / NAVBAR ===== */}
<nav className="navbar">
  <div className="logo">
      <img src="b9e1e036-8341-4d0b-8ece-857476116814.jpeg"></img>
  </div>

  {/* Hamburger */}
  <input type="checkbox" id="menu-toggle" />
  <label htmlFor="menu-toggle" className="menu-icon">
    <span></span>
    <span></span>
    <span></span>
  </label>

<ul className="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#SERVICES">Our Service</a></li>
  <li><a href="#products">Our Product</a></li>
  <li><a href="#contacts">Contact Us</a></li>
</ul>
</nav>


      {/* ================= CAROUSEL ================= */}
      <div className="container-fluid p-0 mt-1">
        <div
          id="homeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.pinimg.com/736x/58/f2/cd/58f2cdaa351f461e24651d0b363d260a.jpg"
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://tiimg.tistatic.com/fp/1/002/264/20mmx52mmx22-2mm-angular-contact-ball-bearing-for-sliding-contact-bearing-829.jpg"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2022/11/GV/VD/CN/13453853/untitled2-500x500.png"
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* ================= ABOUT COMPANY ================= */}
<section id="about" className="about-section">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left Image */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2022/11/GV/VD/CN/13453853/untitled2-500x500.png"
          alt="About Bearings Company"
          className="about-img"
        />
      </div>

      {/* Right Content */}
      <div className="col-lg-6">
        <h2 className="about-title">About Our Company</h2>
        <p className="about-text">
          ABC Bearings Pvt. Ltd. is a trusted name in the manufacturing and
          supply of high-quality industrial bearings. With years of industry
          experience, we deliver reliable, durable, and precision-engineered
          bearing solutions.
        </p>

        <p className="about-text">
          Our expertise spans across ball bearings, roller bearings, angular
          contact bearings, and customized engineering solutions for diverse
          industrial applications.
        </p>

        <ul className="about-points">
          <li>✔ High-Quality Industrial Bearings</li>
          <li>✔ Advanced Engineering Solutions</li>
          <li>✔ Reliable After-Sales Support</li>
          <li>✔ Trusted by Leading Industries</li>
        </ul>

        <button className="about-btn">Learn More</button>
      </div>

    </div>
  </div>
</section>
 {/* ================= SKILLS / SERVICES ================= */}
      <div className="container skills-section" id="SERVICES">
        <div className="text-center mb-5">
          <h2 className="skills-title">We focus on our Service.</h2>
          <p className="skills-subtitle">
            WE KNOW OUR CORE STRENGTHS, STICK TO OUR GUNS AND HONE OUR SKILLS.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="skills-card">
              <img src="https://www.pitsongears.com/wp-content/uploads/2019/11/gear-vector-icon-7.jpg" className="skills-img" />
              <h4 className="skills-card-title">Products</h4>
              <button className="skills-btn">Know More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skills-card">
              <img src="https://cdn-icons-png.flaticon.com/512/1048/1048946.png" className="skills-img" />
              <h4 className="skills-card-title">Custom Engineering & Retrofit</h4>
              <button className="skills-btn">Know More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skills-card">
              <img src="https://www.pitsongears.com/wp-content/uploads/2016/08/sers-1.png" className="skills-img" />
              <h4 className="skills-card-title">Service & Repair</h4>
              <button className="skills-btn">Know More</button>
            </div>
          </div>
        </div>
      </div>

  {/* ================= ABOUT COMPANY ================= */}
  {/* ================= OUR PRODUCTS ================= */}
<section id="products" className="products-section">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="products-title">Our Products</h2>
      <p className="products-subtitle">
        Precision-engineered bearings designed for performance, durability, and reliability.
      </p>
    </div>

    <div className="row g-4">
      {/* Product 1 */}
      <div className="col-lg-3 col-md-6">
        <div className="product-card">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/11/GV/VD/CN/13453853/untitled2-500x500.png"
            alt="Ball Bearings"
          />
          <h5>Ball Bearings</h5>
          <p>High-speed and low-friction bearings for industrial applications.</p>
          <button className="product-btn">View Details</button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="col-lg-3 col-md-6">
        <div className="product-card">
          <img
            src="https://tiimg.tistatic.com/fp/1/002/264/20mmx52mmx22-2mm-angular-contact-ball-bearing-for-sliding-contact-bearing-829.jpg"
            alt="Roller Bearings"
          />
          <h5>Roller Bearings</h5>
          <p>Designed to handle heavy radial and axial loads efficiently.</p>
          <button className="product-btn">View Details</button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="col-lg-3 col-md-6">
        <div className="product-card">
          <img
            src="https://i.pinimg.com/736x/58/f2/cd/58f2cdaa351f461e24651d0b363d260a.jpg"
            alt="Angular Bearings"
          />
          <h5>Angular Contact Bearings</h5>
          <p>Ideal for applications requiring high precision and speed.</p>
          <button className="product-btn">View Details</button>
        </div>
      </div>

      {/* Product 4 */}
      <div className="col-lg-3 col-md-6">
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tJpDJZ6b3xg-r4Cgr8ivchC6cF_Da9xvXQ&s"
            alt="Thrust Bearings"
          />
          <h5>Thrust Bearings</h5>
          <p>Engineered to support axial loads with maximum efficiency.</p>
          <button className="product-btn">View Details</button>
        </div>
      </div>
    </div>
  </div>
</section>


             <footer className="footer" id="contacts">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">ABC Bearings Pvt. Ltd.</h5>
            <p className="footer-text">
              Leading manufacturer and supplier of high-quality industrial
              bearings, engineering solutions, and reliable repair services.
            </p>
          </div>

          {/* Products */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Products</h5>
            <ul className="footer-links">
              <li>Ball Bearings</li>
              <li>Roller Bearings</li>
              <li>Angular Bearings</li>
              <li>Thrust Bearings</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-links">
              <li>Custom Engineering</li>
              <li>Retrofit Solutions</li>
              <li>Maintenance & Repair</li>
              <li>Industrial Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Contact</h5>
            <p className="footer-text">📍 Ahmedabad, Gujarat, India</p>
            <p className="footer-text">📞 +91 98765 43210</p>
            <p className="footer-text">✉ info@abcbearings.com</p>

            <div className="footer-social">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} ABC Bearings Pvt. Ltd. | All Rights Reserved
        </div>
      </div>
    </footer>
    </>
  );
}
