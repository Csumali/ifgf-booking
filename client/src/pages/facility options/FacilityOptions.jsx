import React from "react";
import "./facilityoptions.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export const FacilityOptions = () => {
  return (
    <div className="IFGF-booking">
      <Header />
      <p className="text-wrapper-4">Which facility would you like to book?</p>
      <p className="text-wrapper-5">IFGF Seattle Facility Use Request</p>
      <div className="group">
        <div className="frame-7">
          {/* <ButtonContained
            className="button-contained-instance"
            color="primary"
            darkMode={false}
            iconLeft={false}
            iconRight={false}
            size="large"
            unstyledButtonText="GYM"
          /> */}
          <img className="rectangle" alt="Rectangle" src="rectangle-1.svg" />
        </div>
        <div className="frame-8">
          {/* <ButtonContained
            className="button-contained-instance"
            color="primary"
            darkMode={false}
            iconLeft={false}
            iconRight={false}
            size="large"
            unstyledButtonText="PARKING LOT"
          /> */}
          <img className="rectangle" alt="Rectangle" src="rectangle-2.svg" />
        </div>
        <div className="frame-9">
          {/* <ButtonContained
            className="button-contained-instance"
            color="primary"
            darkMode={false}
            iconLeft={false}
            iconRight={false}
            size="large"
            unstyledButtonText="CLASSROOM"
          /> */}
          <img className="rectangle-2" alt="Rectangle" src="rectangle-3.png" />
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