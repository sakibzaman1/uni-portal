import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ContactSection from '../../Components/ContactSection/ContactSection';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div>
                <ContactSection></ContactSection>
            </div>
        </div>
    );
};

export default Home;