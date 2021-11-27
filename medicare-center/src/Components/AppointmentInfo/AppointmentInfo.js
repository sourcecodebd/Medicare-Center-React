import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AppointmentInfo = () => {
    const { contactForm } = useAuth();
    console.log(contactForm);
    const { show } = contactForm;
    const { name, phone, serial } = show;

    return (
        <div className="my-5 py-3 text-dark shadow col-md-4 mx-auto rounded">
            <h2>Appointment Information</h2>
            <p className="line"></p>

            {
                !show.name ?
                    <div className="fw-bold text-secondary my-3">
                        <h6 className="mb-3">Submit Patient Information First, then you will see information that is required for Doctor's Appointment!</h6>
                        <Link to="/submit-info"><button className="btn-medical-dark">Get Serial</button></Link>
                    </div>
                    :
                    <div className="my-3">
                        <p className="text-secondary"><span className="fw-bold">Patient Name:</span> {name}</p>
                        <p className="text-secondary"><span className="fw-bold">Contact Number:</span> {phone}</p>
                        {
                            serial?.map((s, i) => <p className="text-secondary" key={i}>Your Doctor's Appointment Serial is {s}</p>)
                        }
                    </div>
            }

        </div>
    );
};

export default AppointmentInfo;