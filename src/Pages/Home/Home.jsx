import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='my-10'>
                <Slider></Slider>
            </div>
            <div>
                <ContactSection></ContactSection>
            </div>
        </div>
    );
};

export default Home;