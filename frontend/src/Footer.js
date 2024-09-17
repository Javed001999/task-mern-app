// import React from 'react';
// import './index.css';

// const Footer = () => {
//     return (
//         <>
//             <footer className="footer">
//                 <div className="footer-content">
//                     <p>&copy; 2024 Software Solution Pvt. Ltd. All rights reserved.</p>
//                 </div>
//             </footer>
//         </>
//     );
// };

// export default Footer;

import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to providing the best services to our customers.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            {/* <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li> */}
               <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@company.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
      <p>&copy; 2024 Software Solution Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
