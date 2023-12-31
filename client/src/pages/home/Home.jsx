import "./home.css";

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";

export const Home = () => {
  return (
    <div className="IFGF-booking">
      <Header />
      <Title />
      <p className="text-wrapper-4">What are you using this facility for?</p>
      <div className="frame-7">
        <a href="notimplemented">
          <button className="button-1">CAREGROUP / CHURCH EVENT</button>
        </a>
        <a href="facility-options">
          <button className="button-1">BUSINESS / OTHER</button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home