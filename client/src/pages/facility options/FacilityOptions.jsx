import React from "react";
import "./facilityoptions.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";

export const FacilityOptions = () => {
  return (
    <div className="IFGF-booking">
      <Header />
      <Title />
      <p className="text-wrapper-4">Which facility would you like to book?</p>
      <div className="group">
        <div className="gym">
          <a href="notimplemented">
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
      {/* <ButtonText
        className="button-text-instance"
        color="primary"
        darkMode={false}
        iconLeft
        iconRight={false}
        size="large"
        unstyledButtonText="BACK"
      /> */}
      <Footer />
    </div>
  );
};

export default FacilityOptions;