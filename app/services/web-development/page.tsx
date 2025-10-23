
import React from 'react'
import Hero from "./hero";
import WebDevToolsCards from "./Web-tools";
import WebsiteTypeCard from "./website-type"
import WebDevelopmentServices from "./ServiceWeOffer";

const WebDevelopment = () => {
  return (
    <div className="w-full">
      <Hero/>
      <WebDevToolsCards/>
      <WebsiteTypeCard/>
      <WebDevelopmentServices/>
    </div>
  );
};

export default WebDevelopment;
