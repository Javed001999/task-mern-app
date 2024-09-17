import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img  src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <NavLink to="/contact-us" className="btn btn-primary">
              Get Quote
            </NavLink> */}
            <NavLink 
  to="/contact-us" 
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',  
    border: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    marginLeft:'80px',
    marginBottom:'20px',
    marginTop:'20px',
  }} 
  activeStyle={{
    backgroundColor: '#0056b3'  // Darker shade for active state
  }}
>
  Get Quote
</NavLink>

          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
