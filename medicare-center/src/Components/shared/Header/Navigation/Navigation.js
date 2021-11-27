import React from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Navigation.css';
import { handleDownArrow, vanishDownArrow } from './NavPlain';

const Navigation = () => {
    const { firebase } = useAuth();
    const { user, logOut } = firebase;

    const { carts } = useAuth(); // using contextAPI
    const { cart } = carts;

    // const { cart } = useCart(); //using custom-hook

    const activeStyles = {
        backgroundColor: 'white',
        color: 'black'
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" onMouseOut={vanishDownArrow} className="navbar-main">
            <Container>
                <Navbar.Toggle />
                <Navbar.Brand href="#">
                    <Navbar.Collapse className="justify-content-end">
                        {
                            (user.email || user.displayName) ?
                                <div onMouseOver={handleDownArrow} className="dropdown navbar-custom">
                                    {
                                        user.photoURL ?
                                            <img src={user?.photoURL} className="rounded-pill border border-warning border-2" width="35px" alt={user.displayName} />
                                            :
                                            <i className="fas fa-user-circle"></i>
                                    }
                                    <span className="ms-2">
                                        {user.displayName} <i className="fas fa-chevron-down down-arrow"></i>
                                    </span>
                                    <div className="dropdown-content">
                                        <Nav.Link onClick={logOut}><i className="fas fa-sign-out-alt"></i> Sign Out</Nav.Link>
                                    </div>
                                </div>
                                :
                                <div onMouseOver={handleDownArrow} className="dropdown navbar-custom">
                                    <i className="fas fa-user-circle"></i> My Account <i className="fas fa-chevron-down down-arrow"></i>
                                    <div className="dropdown-content">
                                        <Nav.Link as={NavLink} to="/login"><i className="fas fa-sign-in-alt"></i> Sign In</Nav.Link>
                                        <Nav.Link as={NavLink} to="/register"><i className="fas fa-user-plus"></i> Sign Up</Nav.Link>
                                    </div>
                                </div>
                        }
                    </Navbar.Collapse>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/home" className="m-2 nav-section"> Home</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/about" className="m-2 nav-section"> About Us</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/medical-services" className="m-2 nav-section"> Medical Services</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/doctors" className="m-2 nav-section"> Specialized Doctors</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/appointment-review" className="m-2 nav-section"> Appointment-Review</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/submit-info" className="m-2 nav-section"> Submit-Info</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/appointment-info" className="m-2 nav-section"> Appointment-Info</Nav.Link>

                    <i className="fas fa-shopping-cart fa-2x navbar-custom"></i>
                    <Badge pill bg="info" className="badge-custom">
                        {cart ? cart.length : 0}
                    </Badge>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;