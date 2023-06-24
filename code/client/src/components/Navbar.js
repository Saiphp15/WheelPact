/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
            {/* <!-- HEADER STARTS --> */}
            <header>
                {/* <!-- DESKTOP HEADER STARTS --> */}
                <div id="desk-header">
                    <div className="header-container">
                        {/* <!-- logo --> */}
                        <strong className="logo">
                            <Link to="/home">
                                <img src="assets/images/logo.png"/>
                            </Link>
                        </strong>
                        {/* <!-- open nav mobile --> */}

                        {/* <!--search --> */}
                        <label className="open-search" for="open-search">
                            <i className="icofont-search"></i>
                            <input className="input-open-search" id="open-search" type="checkbox" name="menu" />
                            <div className="search">
                                <button className="button-search"><i className="icofont-search"></i></button>
                                <input type="text" placeholder="Search your vehicle" className="input-search" />
                            </div>
                        </label>
                        {/* <!-- search --> */}
                        <nav className="nav-content">
                            {/* <!-- nav --> */}
                            <ul className="nav-content-list">
                                <li className="nav-content-item"><Link to="/" className="nav-content-link" data-bs-target="#locationModal" data-bs-toggle="modal"><i className="icofont-map"></i>Location</Link></li>

                                <li className="nav-content-item account-login">
                                    <label className="open-menu-login-account" for="open-menu-login-account">

                                        <input className="input-menu" id="open-menu-login-account" type="checkbox" name="menu" />

                                        <i className="icofont-ui-user"></i><span className="login-text">Hello, Sign in <strong>Create Account</strong></span> <span className="item-arrow"></span>

                                        {/* <!-- submenu --> */}
                                        <ul className="login-list">
                                            <Link to="/" data-bs-target="#signupModal" data-bs-toggle="modal">
                                                <li className="login-list-item">Sign up</li>
                                            </Link>
                                            <Link to="/" data-bs-target="#loginModal" data-bs-toggle="modal">
                                                <li className="login-list-item">Login</li>
                                            </Link>
                                            <Link to="profile.php">
                                                <li className="login-list-item">Profile Info</li>
                                            </Link>
                                            <Link to="wishlist.php">
                                                <li className="login-list-item">Wishlist</li>
                                            </Link>
                                            <Link to="#">
                                                <li className="login-list-item">Logout</li>
                                            </Link>
                                            </ul>
                                    </label>
                                </li>
                            </ul>
                            {/* <!-- call to action --> */}
                        </nav>
                    </div>
                </div>
                {/* <!-- DESKTOP HEADER ENDS --> */}

                {/* <!-- MOBILE HEADER STARTS --> */}
                <div id="mob-header">
                    <div className="mob-nav">
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex">
                                    <div className="text-end">
                                        <button className="mob-nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"><i className="icofont-navigation-menu"></i></button>
                                    </div>
                                    <div className="logo">
                                        <Link to="/home">
                                            <img src="assets/images/logo.png"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mob-location">
                                    <i className="icofont-map"></i>
                                    <h6>Mumbai</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas offcanvas-start mob-offcanvas" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                    <div className="offcanvas-header mob-menu-header">
                        <div className="mob-menu-user">
                            <span className="mob-login-text">Hello, User</span>
                        </div>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body mob-menu-body">
                        <ul className="mob-nav-list">
                            <Link to="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                                <li><i className="icofont-login"></i>Login / Sign Up</li>
                            </Link>
                            <Link to="profile.php">
                                <li><i className="icofont-user"></i>Profile Info</li>
                            </Link>
                            <Link to="wishlist.php">
                                <li><i className="icofont-heart"></i> Wishlist</li>
                            </Link>
                            <Link to="#">
                                <li><i className="icofont-logout"></i>Logout</li>
                            </Link>
                        </ul>

                        <ul className="mob-nav-imp-list">
                            <Link to="#">
                                <li>About Us</li>
                                <i className="icofont-right"></i>
                            </Link>
                            <Link to="#">
                                <li>Pricing</li>
                            </Link>
                            <Link to="#">
                                <li>Become Our Partner</li>
                            </Link>
                            <Link to="#">
                                <li>Terms & Condition</li>
                            </Link>
                            <Link to="#">
                                <li>Privacy Policy</li>
                            </Link>
                        </ul>

                        <div className="sidebar-title">
                            <h6>Download Our App</h6>
                        </div>
                        <div className="sidebar-app">
                            <Link to="#">
                                <img src="assets/images/google-play-store-transparent.png"/>
                            </Link>
                            <Link to="#">
                                <img src="assets/images/apple-store.png"/>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <!-- MOBILE HEADER ENDS --> */}
            </header>
            {/* <!-- HEADER ENDS --> */}
        </div>
    );
}

export default Navbar