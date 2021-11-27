import React from 'react';
import { Carousel } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Banner.css';

const Banner = () => {
    const { medicals } = useAuth();
    const { services } = medicals;
    const img0 = services[0]?.image;
    const img1 = services[1]?.image;
    const img2 = services[2]?.image;
    const img3 = services[3]?.image;
    const img4 = services[4]?.image;
    const img5 = services[5]?.image;

    const title0 = services[0]?.title;
    const title1 = services[1]?.title;
    const title2 = services[2]?.title;
    const title3 = services[3]?.title;
    const title4 = services[4]?.title;
    const title5 = services[5]?.title;

    const desc0 = services[0]?.description.slice(0, 60) + '...';
    const desc1 = services[1]?.description.slice(0, 60) + '...';
    const desc2 = services[2]?.description.slice(0, 60) + '...';
    const desc3 = services[3]?.description.slice(0, 60) + '...';
    const desc4 = services[4]?.description.slice(0, 60) + '...';
    const desc5 = services[5]?.description.slice(0, 60) + '...';

    return (
        <Carousel fade className="carousel-custom" id="banner">
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img0}
                    alt="First slide"
                />
                <Carousel.Caption className="bg-white text-dark opacity-75 rounded-1 p-2">
                    <h5>{title0}</h5>
                    <p>{desc0}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img1}
                    alt="Second slide"
                />

                <Carousel.Caption className="bg-white text-dark opacity-75 rounded-1 p-2">
                    <h5>{title1}</h5>
                    <p>{desc1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img2}
                    alt="Third slide"
                />

                <Carousel.Caption className="bg-white text-dark opacity-75 rounded-1 p-2">
                    <h5>{title2}</h5>
                    <p>{desc2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption className="bg-white text-dark opacity-75 rounded-1 p-2">
                    <h5>{title3}</h5>
                    <p>{desc3}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img4}
                    alt="Third slide"
                />

                <Carousel.Caption className="bg-white text-dark opacity-75 rounded-1 p-2">
                    <h5>{title4}</h5>
                    <p>{desc4}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img5}
                    alt="Third slide"
                />

                <Carousel.Caption className="bg-white text-dark opacity-75 rounded-1 p-2">
                    <h5>{title5}</h5>
                    <p>{desc5}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;