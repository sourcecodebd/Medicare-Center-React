import React from 'react';
import useAuth from '../../../hooks/useAuth';
import MedicalService from '../MedicalService/MedicalService';
import './MedicalServices.css';

const MedicalServices = () => {
    const { medicals } = useAuth();
    const { services } = medicals;

    const loadingStyle = {
        backgroundImage: 'url(https://assets.materialup.com/uploads/518165c7-66a8-4494-b954-c12e31373256/preview.gif)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: 'scale(0.8)',
        height: '200px'
    }

    return (
        <div className="my-5">
            <h2>Our Medical Services</h2>
            <p className="line"></p>
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gap-4 d-flex justify-content-center mx-auto mt-5">
                {
                    services.length === 0
                        ?
                        <div style={loadingStyle}></div>

                        :
                        services?.map(service => <MedicalService service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default MedicalServices;