import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import DoctorsBanner from './DoctorsBanner/DoctorsBanner';
import MedicalServices from './MedicalServices/MedicalServices';

const Home = () => {
    return (
        <div className="home-container">
            <Banner />
            <MedicalServices />
            <DoctorsBanner />
            <About />
        </div>
    );
};

export default Home;