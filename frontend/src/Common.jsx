import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Common({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="content">
            <div className="text-section">
              <h1>
                {name}
                <strong className="brand-name" > Software Solution Pvt. Ltd. </strong>
              </h1>

              <h2 className="description">
                We're a team of talented developers that can help your business grow! we are dedicated to delivering innovative and reliable software solutions tailored to your unique business needs
                </h2>
                {/* <p>At Software Solution Pvt. Ltd., . With a team of skilled professionals and a commitment to excellence, we transform complex challenges into streamlined, user-friendly applications.
                </p> */}
            

              <div className="button-container">
                <NavLink to={visit} className="btn-get-started">
                  {btname}
                </NavLink>
              </div>
            </div>

            <div className="image-section">
              <img
                src={imgsrc}
                className="img-fluid animated"
                alt="HomeImg"
              />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default Common;
