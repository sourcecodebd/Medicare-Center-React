import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';

const MedicalService = ({ service }) => {
    const { _id, title, type, image, price, rating } = service;

    let history = useHistory();
    const handlerDetails = (id) => {
        const URL = `/single-service-details/${id}`;
        history.push(URL);
    }

    /* Rating React */
    const fullIcon = <i className="fas fa-star"></i>
    const emptyIcon = <i className="far fa-star"></i>
    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(1, 1, 1, 1)), url(https://wallpaperaccess.com/full/624111.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        color: 'white'
    }

    const priceWithDiscount = parseFloat(price) - parseFloat(price) * 0.60;

    return (
        <Card style={{ width: '18rem' }} className="shadow p-0 card-custom">
            <div className="medical-image shadow-sm">
                <Card.Img variant="top" src={image} />
            </div>
            <Card.Body style={backgroundStyle}>
                <Card.Title>
                    <h3>{title}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={emptyIcon}
                            placeholderSymbol={fullIcon}
                            fullSymbol={fullIcon}
                            readonly
                        />
                        <Button className="text-white fw-bold" variant="" style={{ backgroundColor: '#1048ff', border: 'none' }}>
                            Review <Badge className="border border-1 fs-6" bg="white" style={{ color: '#1048ff' }}>{rating}</Badge>
                        </Button>
                    </div>
                </Card.Title>
                <Card.Text className="text-justify">
                    <span className="text-yellow">Id: </span>{_id}<br />
                    <span className="text-yellow">Service:</span> {title}<br />
                    <span className="text-yellow">Category: </span> {type}<br />
                    <span className="text-yellow">Medical Fee: </span> BDT. {priceWithDiscount} <del><small>{price}</small></del><br />
                    <li className="text-center">
                        <button className="btn-custom" onClick={() => handlerDetails(_id)}><i className="fas fa-arrow-right"></i> Get Appointment </button>
                    </li>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MedicalService;