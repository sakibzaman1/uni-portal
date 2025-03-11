import React, { useEffect } from "react";
import BannerVideo from "../../assets/Videos/graduation_banner.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="relative mt-0" style={{ position: "relative" }}>
      <div className="video-container" style={{ position: "relative" }}   data-aos="zoom-out" data-aos-duration="1000">
        <video
          className="h-full w-full"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover", position: "relative", zIndex: 1 }}
        >
          <source src={BannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "rgba(0, 0, 0, 0)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <div className="space-y-10"   data-aos="zoom-in" data-aos-duration="1000">
            <h1 className="font-Montserrat text-7xl">
              Welcome To University of Global Village
            </h1>
            <p className="font-sans text-xl">
              where the pursuit of knowledge knows no bounds and the spirit of
              learning knows no limits
            </p>
            <button className="bg-gradient-to-l from-gray-700 to-gray-900 py-2 px-8 transform transition-transform hover:scale-110 duration-300 font-Montserrat shadow-2xl">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
