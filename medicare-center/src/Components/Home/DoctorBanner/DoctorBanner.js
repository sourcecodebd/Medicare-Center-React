import React from 'react';

const DoctorBanner = ({ doctor }) => {
    const { name, doctor_img, specilities } = doctor;

    return (
        <div class="product-card">
            <img src={doctor_img} className="img-fluid" alt="" />
            <h4>{name}</h4>
            <p>Specilaities: {specilities}</p>
        </div>
    );
};

export default DoctorBanner;