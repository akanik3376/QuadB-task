// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../Shard/Container';
import '../../CSSFile/logo.css';

const Navbar = () => {
    return (
        <Container>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex" to="/">
                        <h4 className="colorful-text red">M</h4>
                        <h4 className="colorful-text orange">o</h4>
                        <h4 className="colorful-text black">v</h4>
                        <h4 className="colorful-text green">i</h4>
                        <h4 className="colorful-text green">e</h4>
                        <h4 className="colorful-text blue">H</h4>
                        <h4 className="colorful-text indigo">u</h4>
                        <h4 className="colorful-text violet">b</h4>
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" exact>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/my-booking" exact>
                                    My-Booking
                                </NavLink>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
