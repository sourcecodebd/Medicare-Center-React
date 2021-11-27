import React from 'react';
import useAuth from '../../../hooks/useAuth';
import DoctorBanner from '../DoctorBanner/DoctorBanner';
import './DoctorsBanner.scss';

const DoctorsBanner = () => {
    const { medicals } = useAuth();
    const { doctors } = medicals;

    return (
        <div className="py-5">
            <h2>Specialied Doctors</h2>
            <p className="line"></p>
            <div class="container-doctor-banner my-5">
                {
                    doctors.map(doctor => <DoctorBanner doctor={doctor} key={doctor.id} />)
                }
            </div>
        </div>
    );
};

export default DoctorsBanner;