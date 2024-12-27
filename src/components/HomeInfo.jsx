import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-blue-small neo-btn text-white">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-white py-4 px-8 text-black mx-5 rounded-xl">
      Hi, I am <span className="font-semibold">Felix Ivander</span>
      <br />A Website Developer from Indonesia.
    </h1>
  ),
  2: (
    <InfoBox
      text="Studying at Multimedia Nusantara University, majoring in Informatics Engineering and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Work on multiple projects, from personal to professional, and always looking for new opportunities"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need an app for your business or personal use? I'm just a few clicks away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
