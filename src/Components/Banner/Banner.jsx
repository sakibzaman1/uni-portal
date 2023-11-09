import React from "react";
import BannerVideo from '../../assets/Videos/Banner.mp4'

const Banner = () => {
  return (
    <div className="relative">
      <video className="h-full w-full  " autoPlay loop muted>
        <source src={BannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-10 right-20">
        <h1>Sakib</h1>
      </div>
    </div>
  );
};

export default Banner;
