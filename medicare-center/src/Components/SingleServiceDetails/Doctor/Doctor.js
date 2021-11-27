import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { doctor_img, name, type, degree, specilities, schedule } = doctor;
    const { carts } = useAuth();
    const { cart, setCart } = carts;
    const history = useHistory();

    const addToCart = (doc) => {
        console.log(doc)
        let newArray = [];
        const foundDoctor = cart?.find(c => c.id === doc.id);
        if (foundDoctor) {
            const rest = cart?.filter(c => c.id !== doc.id);
            newArray = [...rest, doc];
        }
        else {
            newArray = [...cart, doc];
        }
        setCart(newArray);
        history.push('/appointment-review');
    }


    return (
        <div className="doctor-card shadow my-2 p-2">
            <h3>{name}</h3>
            <img src={doctor_img} alt={name} />
            <p className="my-2">Department: {type}</p>
            <p>Degree: {degree}</p>
            <p>Specialitites: {specilities}</p>
            <p>Schedule: {schedule}</p>
            <button onClick={() => addToCart(doctor)} className="btn-doctor text-center">Appoint</button>
        </div>
    );
};

export default Doctor;