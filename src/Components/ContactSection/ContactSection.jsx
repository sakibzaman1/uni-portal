import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ugvLogo from "../../assets/Images/ugv_logo_removebg.png";

const ContactSection = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-20 mb-10">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-3xl text-center w-1/2"  data-aos="fade-right" data-aos-duration="1000">
   
        <h1 className="text-3xl font-bold text-blue-700">Contact Us</h1>
        <p className="text-lg text-gray-800 mt-4">Have questions or need assistance? Feel free to reach out to us.</p>
        
        <form className="mt-4">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Submit</button>
        </form>
      </div>
      <div className='w-1/2 flex justify-center'  data-aos="zoom-in" data-aos-duration="1000">
        <img className='w-48' src={ugvLogo} alt="" />
      </div>
    </div>
    );
};

export default ContactSection;