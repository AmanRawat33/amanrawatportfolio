import React from "react";
import { NavLink } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <NavLink to={link} className="neo-brutalism-white neo-btn" >
        {btnText} <img src={arrow} className="w-4 h-4 object-contain"/>
      </NavLink>
    </div>
  );
};
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold ">Aman</span> 👋
      <br />A Software Engineer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many projects and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Need a project done or looking for a dev? I am just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
  4: (
    <InfoBox
      text="You can check my resume here"
      link="/contact"
      btnText="Resume"
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  return <div>{renderContent[currentStage]}</div>;
};

export default HomeInfo;
