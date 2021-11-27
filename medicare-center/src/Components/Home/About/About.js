import React from 'react';
import './About.css';

const About = () => {

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(1, 1, 1, 1)), url(https://wallpaperaccess.com/full/624111.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className="p-5" style={backgroundStyle}>
            <h2 className="heading-dark">About Us</h2>
            <p className="line-dark"></p>
            <div className="about-us">
                <img src="./medicare.ico" className="my-5 img-fluid" alt="" />
                <p className="text-info text-justify">Medicare Center is dedicated to being a leader by providing high-quality care to the County and surrounding area residents.  We continue to strengthen our reputation by providing innovative, resident-centered, rehabilitative and long term care in a culturally diverse setting.  We focus on a team-oriented environment while remaining fiscally responsible and serving as a resource to the community.</p>
            </div>
        </div>
    );
};

export default About;