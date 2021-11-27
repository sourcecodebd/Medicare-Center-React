import { Button } from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert2';
import ReviewItem from '../ReviewItem/ReviewItem';

const AppointmentReview = () => {
    const { carts } = useAuth();
    const { cart, setCart } = carts;

    const history = useHistory();
    const handlePlaceOrder = () => {
        setCart([]);
        new swal("", "Your Appointment has been placed successfully!! Now you need to give addtional details in order to get serial number for your appointment.", "success");
        history.push('/submit-info');
    }

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(0.9, 0.9, 0.9, 0.9), rgba(1, 1, 1, 1)), url(https://wallpaperaccess.com/full/624111.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        color: 'white'
    }

    return (
        <div style={backgroundStyle} className="py-5">
            <h2 className="heading-dark">Appointment Review</h2>
            <p className="line-dark"></p>
            {
                cart.length === 0 ?
                    <div>
                        <h6 className="m-3">You have no Appointment yet! Go to Medical Services section to get appointment of your desired doctor</h6>
                        <Link to="/medical-services"><button className="btn-medical">Medical Services</button></Link>
                    </div>
                    :
                    <Button onClick={handlePlaceOrder} variant="contained" className="bg-success mt-3"><i class="fas fa-location-arrow me-1"></i> Confirm</Button>
            }
            {
                cart?.map(c => <ReviewItem item={c} key={c.id} />)
            }
        </div>
    );
};

export default AppointmentReview;