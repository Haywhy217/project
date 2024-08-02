import React from "react";
import "./Slide.css";
import delivery from "../../assets/images/delivery.png";
import Learn from "../../assets/images/Learn.png";

function Slideshow() {
  return (
    <div className="Slideshow">
      <div id="Header">
        <h1>Our Logistics Services</h1>
        <p>
          {" "}
          Our efficient network ensures timely delivery and reliable service.
        </p>
      </div>
      <div className="deliveries">
        <div className="delivery1">
          <img src={delivery} />
          <h2>Domestic Logistics</h2>
          <p>
            Streamline your corporate logistics with our tailored shipping
            solutions.{" "}
          </p>
          <img src={Learn} className="learn"/>
        </div>

        <div className="delivery1">
          <img src={delivery} />
          <h2>Corporate Logistics</h2>
          <p>
            Streamline your corporate logistics with our tailored shipping
            solutions.{" "}
          </p>
          <img src={Learn} className="learn"/>
        </div>

        <div className="delivery1">
          <img src={delivery} />
          <h2>Oversea Logistics</h2>
          <p>
            Streamline your corporate logistics with our tailored shipping
            solutions.{" "}
          </p>
          <img src={Learn} className="learn"/>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
