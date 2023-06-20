import React from 'react';

function Footer(){
    return (
        <div>
            <footer>
              <div className="main-footer section-spacing">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6 col-lg-3">
                              <div className="footer-logo">
                                  <img src="assets/images/logo-bg.png"/>
                              </div>
                              <div className="footer-comp-details">
                                  <p>** All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.</p>
                              </div>
                          </div>

                          <div className="col-md-6 col-lg-3">
                              <div className="footer-title">
                                  <h3>Important Links</h3>
                              </div>
                              <ul className="footer-link">
                                  <li><a href="#">About Us</a></li>
                                  <li><a href="#">Contact Us</a></li>
                                  <li><a href="become-partner.php">Become Our Partner</a></li>
                                  <li><a href="#">Careers</a></li>
                                  <li><a href="#">Terms & Conditions</a></li>
                                  <li><a href="#">Privacy Policy</a></li>
                                  <li><a href="#">Refund & Return Policy</a></li>
                                  <li><a href="#">FAQ's</a></li>
                                  <li><a href="#">Blogs</a></li>
                                  <li><a href="#">Sitemap</a></li>
                              </ul>
                          </div>

                          <div className="col-md-6 col-lg-3">
                              <div className="footer-title">
                                  <h3>Popular Brands</h3>
                              </div>
                              <ul className="footer-link">
                                  <li><a href="#">Maruti Suzuki</a></li>
                                  <li><a href="#">Hyundai</a></li>
                                  <li><a href="#">Mahindra</a></li>
                                  <li><a href="#">Toyota</a></li>
                                  <li><a href="#">Tata</a></li>
                                  <li><a href="#">Honda</a></li>
                                  <li><a href="#">Skoda</a></li>
                                  <li><a href="#">Volkswagen</a></li>
                                  <li><a href="#">BMW</a></li>
                                  <li><a href="#">Mercedes</a></li>
                              </ul>
                          </div>

                          <div className="col-md-6 col-lg-3">
                              <div className="footer-title">
                                  <h3>Connect with us</h3>
                              </div>
                              <ul className="footer-social-media">
                                  <a href="#">
                                      <li>
                                          <i className="icofont-facebook"></i>
                                      </li>
                                  </a>
                                  <a href="#">
                                      <li>
                                          <i className="icofont-instagram"></i>
                                      </li>
                                  </a>
                                  <a href="#">
                                      <li>
                                          <i className="icofont-twitter"></i>
                                      </li>
                                  </a>
                                  <a href="#">
                                      <li>
                                          <i className="icofont-linkedin"></i>
                                      </li>
                                  </a>
                                  <a href="#">
                                      <li>
                                          <i className="icofont-whatsapp"></i>
                                      </li>
                                  </a>
                              </ul>
                              <div className="footer-title mt-4">
                                  <h3>Download Our App</h3>
                              </div>
                              <div className="footer-app">
                                  <a href="#" target="_blank">
                                      <img src="assets/images/google-play-store-transparent.png"/>
                                  </a>
                                  <a href="#" target="_blank">
                                      <img src="assets/images/apple-store.png"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="bottom-footer">
                  <div className="text-center text-white">
                      <p>&copy; Copyright 2022. All Rights Reserved | Product by <a href="https://parastone.in" target="_blank">Parastone</a></p>
                  </div>
              </div>
          </footer>
        </div>
    );
}

export default Footer