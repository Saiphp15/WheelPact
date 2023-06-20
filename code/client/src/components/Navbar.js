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
                                <li className="nav-content-item"><a className="nav-content-link" href="#" data-bs-target="#locationModal" data-bs-toggle="modal"><i className="icofont-map"></i>Location</a></li>

                                <li className="nav-content-item account-login">
                                    <label className="open-menu-login-account" for="open-menu-login-account">

                                        <input className="input-menu" id="open-menu-login-account" type="checkbox" name="menu" />

                                        <i className="icofont-ui-user"></i><span className="login-text">Hello, Sign in <strong>Create Account</strong></span> <span className="item-arrow"></span>

                                        {/* <!-- submenu --> */}
                                        <ul className="login-list">
                                            <a href="javascript:void(0);" data-bs-target="#signupModal" data-bs-toggle="modal">
                                                <li className="login-list-item">Sign up</li>
                                            </a>
                                            <a href="javascript:void(0);" data-bs-target="#loginModal" data-bs-toggle="modal">
                                                <li className="login-list-item">Login</li>
                                            </a>
                                            <a href="profile.php">
                                                <li className="login-list-item">Profile Info</li>
                                            </a>
                                            <a href="wishlist.php">
                                                <li className="login-list-item">Wishlist</li>
                                            </a>
                                            <a href="#">
                                                <li className="login-list-item">Logout</li>
                                            </a>
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
                            <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                                <li><i className="icofont-login"></i>Login / Sign Up</li>
                            </a>
                            <a href="profile.php">
                                <li><i className="icofont-user"></i>Profile Info</li>
                            </a>
                            <a href="wishlist.php">
                                <li><i className="icofont-heart"></i> Wishlist</li>
                            </a>
                            <a href="#">
                                <li><i className="icofont-logout"></i>Logout</li>
                            </a>
                        </ul>

                        <ul className="mob-nav-imp-list">
                            <a href="#">
                                <li>About Us</li>
                                <i className="icofont-right"></i>
                            </a>
                            <a href="#">
                                <li>Pricing</li>
                            </a>
                            <a href="#">
                                <li>Become Our Partner</li>
                            </a>
                            <a href="#">
                                <li>Terms & Condition</li>
                            </a>
                            <a href="#">
                                <li>Privacy Policy</li>
                            </a>
                        </ul>

                        <div className="sidebar-title">
                            <h6>Download Our App</h6>
                        </div>
                        <div className="sidebar-app">
                            <a href="#">
                                <img src="assets/images/google-play-store-transparent.png"/>
                            </a>
                            <a href="#">
                                <img src="assets/images/apple-store.png"/>
                            </a>
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