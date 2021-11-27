import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const ReviewItem = ({ item }) => {
    const { id, name, specilities, schedule, doctor_img } = item || {}
    const { carts } = useAuth();
    const { cart, setCart } = carts;
    console.log(cart);

    const handleRemoveItem = () => {
        const deleted = cart.filter(c => c.id !== item.id);
        setCart(deleted);
    }

    return (
        <div className="container bg-white row row-cols-1 row-cols-md-3 row-cols-lg-6 align-items-center justify-content-center shadow my-3 py-3 mx-auto opacity-75 text-dark rounded-1">
            <img src={doctor_img} className="rounded-pill" alt="" />
            <h3 className="my-2">{name}</h3>
            <p>Doctor Id: {id}</p>
            <p>Specialities: {specilities}</p>
            <p>Schedule: {schedule}</p>
            <div>
                <Button onClick={handleRemoveItem} variant="contained" className="bg-danger"><i className="fas fa-trash me-1"></i> Cancel</Button><br />
            </div>
        </div>
    );
};

export default ReviewItem;