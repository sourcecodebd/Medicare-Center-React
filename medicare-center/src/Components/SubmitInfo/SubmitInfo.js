import { Alert, AlertTitle, Button } from '@mui/material';
import { useHistory } from 'react-router';
import swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import './SubmitInfo.css';

const SubmitInfo = () => {
    const { firebase } = useAuth();
    const { error, setError } = firebase;

    const { contactForm } = useAuth();
    const { name, phone, setName, setPhone, setShow } = contactForm;

    const getName = (e) => {
        setName(e.target.value);
    }
    const getPhone = (e) => {
        setPhone(e.target.value);
    }

    let history = useHistory();
    const handleInformation = (e) => {
        e.preventDefault();
        if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone)) {
            setError('Enter valid phone number!');
            return;
        }
        const randomNumber = Math.round(Math.random() * 1000 + 1);
        let noRepeat = [];
        if (noRepeat.indexOf(randomNumber) === -1) {
            noRepeat.push(randomNumber);
        }
        setShow({ name: name, phone: phone, serial: noRepeat });
        new swal("", "Your Appointment Serial has been set successfully!!", "success");
        setError('');
        history.push('/appointment-info');
    }

    return (
        <div className="my-5">
            <h2>Submit Appointment Info</h2>
            <p className="line"></p>
            <div className="col-md-4 mx-auto my-3">
                {
                    error &&
                    <Alert severity="error" className="mb-2 fw-bold">
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
                }
                <form onSubmit={handleInformation} className="col-md-8 mx-auto shadow p-3" action="">
                    <input type="text" placeholder="Name" onBlur={getName} className="contact-info form-control shadow bg-info text-white border border-white border-4" required />
                    <br />
                    <input type="text" placeholder="Phone Number" onBlur={getPhone} className="contact-info form-control shadow bg-info text-white border border-white border-4" required />
                    <br />
                    <Button type="submit" variant="contained" className="bg-success">Get Serial</Button>
                </form>
            </div>
        </div>
    );
};

export default SubmitInfo;