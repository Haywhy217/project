import React from "react";
import "./Hero.css";
import store from "../../assets/images/store.png";
import dude from "../../assets/images/Man.png";
// import delivery from './delivery.png'

function Hero() {
  return (
    <div className="Hero">
      <div className="dude">
        <img src={dude} />
      </div>

      <div id="info">
        <p className="red">Your trusted Partner in Global Logistics</p>
        <h1>
          More than just logistics, We're Your Supply Chain Experts.
        </h1>
        <p className="info-b">
          We go beyond just moving cargo, we build strategic partnerships that{" "} drive your success.
        </p>

        <p className="full-info">
          Don't just settle for a logistics provider, choose a partner with
          expertise. <br /> At CarryGo, we go beyond simply moving cargo; we're
          your supply chain <br /> experts. Our team offers comprehensive
          knowledge and experience in all <br /> facets of logistics, allowing
          us to develop customized solutions that <br /> optimize your
          operations and drive your success. We build strategic <br />{" "}
          partnerships with our clients, becoming an extension of your team and{" "}
          <br /> helping you achieve your business goals.
        </p>
        {/* <button className="text-white1 bg-[#F3161F] dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 mt-5 sm:px-5 py-3">
          Learn More
        </button> */}
        <button className="text-white1">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
