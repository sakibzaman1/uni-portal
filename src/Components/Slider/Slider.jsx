import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Slider = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div  data-aos="fade-up" data-aos-duration="1000">
      <h1 className="my-20 text-center font-Montserrat text-5xl">Explore</h1>
      <AwesomeSlider animation="cubeAnimation">
        <div><img src="https://images.unsplash.com/20/cambridge.JPG?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div><img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div><img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div><img src="https://plus.unsplash.com/premium_photo-1679547203090-6313a91d4478?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
