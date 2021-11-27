import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Doctor from './Doctor/Doctor';

const SingleServiceDetails = () => {
    const { medicalId } = useParams();
    const [singleDetails, setSingleDetails] = useState({});
    const [availableDoctors, setAvailableDoctors] = useState([]);
    const { medicals } = useAuth();
    const { services, doctors } = medicals;

    useEffect(() => {
        const foundServices = services?.find(service => service._id === parseFloat(medicalId));
        setSingleDetails(foundServices);
        const foundDoctors = doctors?.filter(doctor => doctor.type === singleDetails?.type);
        setAvailableDoctors(foundDoctors);
    }, [services, medicalId, doctors, singleDetails.type]);

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(0.9, 0.9, 0.9, 0.9), rgba(1, 1, 1, 1)), url(https://wallpaperaccess.com/full/624111.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className="py-5" style={backgroundStyle}>
            <h2 className="heading-dark">Service Details</h2>
            <p className="line-dark"></p>
            <div className="container row mx-auto gap-1">

                <div className="bg-white shadow opacity-75 py-3 mt-3 mx-auto text-justify col-md-7">
                    <h2>{singleDetails?.title}</h2>
                    <p>Service Id: {medicalId}</p>
                    <p>Type: {singleDetails?.type}</p>
                    <p>Required: {singleDetails?.required}</p>
                    <p>State: {singleDetails?.state}</p>
                    <p className="">Description: {singleDetails?.description}</p>
                </div>

                <div className="bg-white shadow opacity-75 py-3 mt-3 mx-auto text-justify col-md-4">
                    <h2>Doctors</h2>
                    {
                        availableDoctors?.map(doctor => <Doctor doctor={doctor} key={doctor.id} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default SingleServiceDetails;