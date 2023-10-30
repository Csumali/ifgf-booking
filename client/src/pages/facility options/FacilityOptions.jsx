import React from "react";
import "./facilityoptions.css";

export const FacilityOptions = () => {
  return (
    <div className="IFGF-booking">
      <div className="frame">
        <div className="div">
          <img className="LOGO-IFGF-KAOS" alt="Logo IFGF KAOS" src="LOGO-IFGF-KAOS-BAPTIS-1.png" />
          <div className="text-wrapper">Seattle</div>
        </div>
        <div className="frame-2">
          <img className="img" alt="Call" src="call.svg" />
          <div className="text-wrapper-2">Contact us</div>
        </div>
      </div>
      <div className="frame-3">
        <div className="frame-4">
          <img className="img" alt="Location on" src="location-on.svg" />
          <p className="international-full">
            International Full Gospel Fellowship Seattle
            <br />
            12345 8th Ave NE
            <br />
            Seattle, WA 98125
          </p>
        </div>
        <div className="frame-5">
          <div className="frame-4">
            <img className="img" alt="Email" src="email.svg" />
            <div className="text-wrapper-3">office@ifgfseattle.org</div>
          </div>
          <div className="frame-4">
            <img className="img" alt="Call" src="image.svg" />
            <div className="frame-6">
              <p className="text-wrapper-3">Phone (206) 363 – 4343</p>
              <p className="p">Fax (206) 363 – 4343</p>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default FacilityOptions;