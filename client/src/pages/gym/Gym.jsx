import "./gym.css";

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";

export const Gym = () => {
  return (
    <div className="Gym">
        <Header />
        <a href="/facility-options">
            <button className="back-button">
            <img className="back" alt="Back" src={require("../../images/back.png")} />
            </button>
        </a>
        <Title />
        <div className="group">
            <div className="gym">
                <button className="button-choice">GYM</button>
                <img className="rectangle" alt="Rectangle" src={require("../../images/gym.png")} />
            </div>
        </div>
        <p className="gym-activity-text">What will you use this facility for?</p>
        <form className="gym-activity">
            <div className="activity">
                <label className="activity-label">Activity</label>
                <input type="text" className="activity-input"/>
            </div>
            <div className="group-size">
                <label className="activity-label">Group size</label>
                <input type="text" className="activity-input"/>
            </div>
        </form>
        <Footer />
    </div>
  );
};

export default Gym