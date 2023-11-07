import "./facilityoptions.css";

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";

export const FacilityOptions = () => {
  return (
    <div className="FacilityOptions">
      <Header />
      <a href="/">
        <button className="back-button">
          <img className="back" alt="Back" src={require("../../images/back.png")} />
        </button>
      </a>
      <Title />
      <p className="text-wrapper-4">Which facility would you like to book?</p>
      <div className="group">
        <div className="gym">
          <a href="gym">
            <button className="button-choice">GYM</button>
            <img className="rectangle" alt="Rectangle" src={require("../../images/gym.png")} />
          </a>
        </div>
        <div className="parking-lot">
          <a href="notimplemented">
          <button className="button-choice">PARKING LOT</button>
            <img className="rectangle" alt="Rectangle" src={require("../../images/parking-lot.png")} />
          </a>
        </div>
        <div className="classroom">
          <a href="not-implemented">
            <button className="button-choice">CLASSROOM</button>
            <img className="rectangle-2" alt="Rectangle" src={require("../../images/classroom.png")} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacilityOptions;