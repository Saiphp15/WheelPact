import React,{useState} from 'react';

function Modals() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [showOTPModal, setShowOTPModal] = useState(false);

    const [errors, setErrors] = useState({});

    const validateSignupForm = () => {
        let validationErrors = {};

        // Name validation
        if (!name.trim()) {
            validationErrors.name = 'Name is required';
        }

        // Email validation
        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Email is invalid';
        }

        // Phone validation
        if (!phone.trim()) {
            validationErrors.phone = 'Phone is required';
        } else if (phone.length < 10) {
            validationErrors.phone = 'Phone should be at least 10 characters';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const validateSigninForm = () => {
        let validationErrors = {};
        if(!phone.trim()){
            validationErrors.phone = 'Phone is Required.';
        }
        if (!phone.trim()) {
            validationErrors.phone = 'Phone is required';
        } else if (phone.length < 10) {
            validationErrors.phone = 'Phone should be at least 10 characters';
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    }

    const handleSugnUpSubmit = (event) => {
        event.preventDefault();
        if (validateSignupForm()) {
            /* Perform form submission logic here */
            console.log('Form submitted successfully');
            /* Reset form fields */
            setName('');
            setEmail('');
            setPhone('');
            setErrors({});
        }
    };

    

    const handleSigninSubmit = (event) => {
        event.preventDefault();
        if(validateSigninForm()){
            console.log("login successfull.");
            //OTPMessage();
            //$('#loginModal').modal('show');

            // Perform actions to send OTP
            setShowOTPModal(true);
        }else{
            setShowOTPModal(false);
        }
    }

    return (
        <div>
            
            {/* <!-- LOCATION MODAL STARTS --> */}
            <div className="modal fade" id="locationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-title text-center mb-3">
                                <h5>Select your city</h5>
                            </div>

                            <div className="container">
                                <div className="row">

                                    <div className="grid-wrapper grid-col-auto">
                                        <label for="radio-card-1" className="radio-card">
                                            <input type="radio" name="radio-card" id="radio-card-1" checked />
                                            <div className="location-card-content-wrapper">
                                                <span className="check-icon"></span>
                                                <div className="location-card-content">
                                                    <img src="assets/images/mumbai-img.jpg" alt="" />
                                                    <h4>Mumbai</h4>
                                                </div>
                                            </div>
                                        </label>
                                        {/* <!-- /.radio-card --> */}

                                        <label for="radio-card-2" className="radio-card">
                                            <input type="radio" name="radio-card" id="radio-card-2" />
                                            <div className="location-card-content-wrapper">
                                                <span className="check-icon"></span>
                                                <div className="location-card-content">
                                                    <img src="assets/images/mumbai-img.jpg" alt="" />
                                                    <h4>Pune</h4>
                                                </div>
                                            </div>
                                        </label>
                                        {/* <!-- /.radio-card--> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- LOCATION MODAL ENDS --> */}

            {/* <!-- LOGIN MODAL STARTS --> */}
            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-icon-holder mx-auto">
                                <i className="icofont-key"></i>
                            </div>
                            <div className="modal-title text-center mb-3">
                                <h5>Login</h5>
                            </div>
                            <div className="container">
                                <form onSubmit={handleSigninSubmit}>
                                    <div className="login-input mt-4">
                                        <label className="brand-label mb-1">Enter Mobile Number<span className="required">*</span></label>
                                        <input 
                                            type="tel" 
                                            name='phone'
                                            className="brand-input" 
                                            id="loginNumber" 
                                            maxLength={10}
                                            value={phone} 
                                            onChange={(event) => setPhone(event.target.value)} 
                                        />
                                        {errors.phone && <div className="error">{errors.phone}</div>}
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="dg-brand-btn" >Send OTP</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- LOGIN MODAL ENDS --> */}

            {/* <!-- SIGNUP MODAL STARTS --> */}
            <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-icon-holder mx-auto">
                                <i className="icofont-key"></i>
                            </div>
                            <div className="modal-title text-center mb-3">
                                <h5>Signup</h5>
                            </div>
                            <div className="container">
                                <form onSubmit={handleSugnUpSubmit}>
                                    <div className="login-input mt-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="brand-label mb-1">Full Name<span className="required">*</span></label>
                                                    <input 
                                                        type="text" 
                                                        name='name' 
                                                        className="brand-input" 
                                                        value={name}
                                                        onChange={(event) => setName(event.target.value)} 
                                                    />
                                                    {errors.name && <div className="error">{errors.name}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="brand-label mb-1">Email Address<span className="required">*</span></label>
                                                    <input 
                                                        type="email" 
                                                        name='email' 
                                                        className="brand-input" 
                                                        value={email}
                                                        onChange={(event) => setEmail(event.target.value)}
                                                    />
                                                    {errors.name && <div className="error">{errors.email}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <label className="brand-label mb-1">Enter Mobile Number<span className="required">*</span></label>
                                        <input 
                                            type="tel" 
                                            name='phone' 
                                            className="brand-input" 
                                            id="loginNumber" 
                                            maxLength={10} 
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                        />
                                        {errors.name && <div className="error">{errors.phone}</div>}
                                    </div>
                                    <div className="modal-notify">
                                        <p>By SugnUp , I agree to <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></p>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button  type="submit" className="dg-brand-btn">Submit</button >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- SIGNUP MODAL ENDS --> */}

            {/* <!-- OTP MODAL STARTS --> */}
            <div className={`modal fade ${showOTPModal ? 'show' : ''}`} id="otpModal"  aria-labelledby="exampleModalLabel" aria-hidden={!showOTPModal}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>

                            <div className="modal-icon-holder mx-auto">
                                <i className="icofont-key"></i>
                            </div>
                            <div className="modal-title text-center mb-3">
                                <h5>OTP Verification</h5>
                            </div>

                            <div className="modal-notify">
                                <p>Enter the OTP sent to <span id="loginNumberShow"></span></p>
                            </div>

                            <div className="container">
                                <div className="login-input mt-4">
                                    <label className="brand-label mb-1">Enter OTP</label>
                                    <input type="tel" className="brand-input" />
                                </div>

                                <div className="modal-otp-notify">
                                    <p>Resend OTP in <span id="countdownTimer">30</span> seconds</p>
                                </div>

                                <div className="text-center mt-4 resend-otp-btn">
                                    <a href="#" className="dg-brand-btn">Resend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- OTP MODAL ENDS --> */}

            {/* <!-- WRITE A REVIEW MODAL STARTS --> */}
            <div className="modal fade" id="writeReviewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-icon-holder mx-auto">
                                <i className="icofont-comment"></i>
                            </div>
                            <div className="modal-title text-center mb-3">
                                <h5>Write a Review</h5>
                            </div>

                            <div className="container">
                                <div className="review-input">
                                    <div className="mb-3">
                                        <div className="rate">
                                            <input type="radio" id="star5" name="rate" value="5" />
                                            <label for="star5" title="text">5 stars</label>
                                            <input type="radio" id="star4" name="rate" value="4" />
                                            <label for="star4" title="text">4 stars</label>
                                            <input type="radio" id="star3" name="rate" value="3" />
                                            <label for="star3" title="text">3 stars</label>
                                            <input type="radio" id="star2" name="rate" value="2" />
                                            <label for="star2" title="text">2 stars</label>
                                            <input type="radio" id="star1" name="rate" value="1" />
                                            <label for="star1" title="text">1 star</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="brand-label mb-1">Write Your Review<span className="required">*</span></label>
                                        <textarea className="brand-textarea" rows="4"></textarea>
                                    </div>
                                    <div className="text-end">
                                        <button className="dg-brand-btn">Submit Review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- WRITE A REVIEW MODAL ENDS --> */}

            {/* <!-- VIEW ALL REVIEWS MODAL STARTS --> */}
            <div className="modal fade" id="viewAllReviewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>

                            <div className="modal-icon-holder mx-auto">
                                <i className="icofont-comment"></i>
                            </div>
                            <div className="modal-title text-center mb-3">
                                <h5>View All Reviews</h5>
                            </div>

                            <div className="container">
                                <div className="review-block">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8ODY2MjMwNzF8fGVufDB8fHx8&w=1000&q=80" />
                                    <div className="review-detail">
                                        <h6>Reviewer Name</h6>
                                        <div className="review-rating">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="store-rating-icon">
                                                    <i className="icofont-star"></i>
                                                </div>
                                                <div className="store-rating-count">5.0</div>
                                            </div>
                                        </div>
                                        <p className="main-review">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                    </div>
                                </div>

                                <div className="review-block">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8ODY2MjMwNzF8fGVufDB8fHx8&w=1000&q=80" />
                                    <div className="review-detail">
                                        <h6>Reviewer Name</h6>
                                        <div className="review-rating">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="store-rating-icon">
                                                    <i className="icofont-star"></i>
                                                </div>
                                                <div className="store-rating-count">5.0</div>
                                            </div>
                                        </div>
                                        <p className="main-review">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                    </div>
                                </div>

                                <div className="review-block">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8ODY2MjMwNzF8fGVufDB8fHx8&w=1000&q=80" />
                                    <div className="review-detail">
                                        <h6>Reviewer Name</h6>
                                        <div className="review-rating">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="store-rating-icon">
                                                    <i className="icofont-star"></i>
                                                </div>
                                                <div className="store-rating-count">5.0</div>
                                            </div>
                                        </div>
                                        <p className="main-review">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- VIEW ALL REVIEWS MODAL ENDS --> */}

            {/* <!-- RESERVATION REFUND POLICY MODAL STARTS --> */}
            <div className="modal fade" id="reservationRefundModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>

                            <div className="modal-icon-holder mx-auto">
                                <i className="icofont-shield-alt"></i>
                            </div>
                            <div className="modal-title text-center mb-3">
                                <h5>Reservation Refund Policy</h5>
                            </div>

                            <div className="container">
                                <div className="rrp-content">
                                    <h5 className="text-center mb-4">Thankyou for your interest in reserving a vehicle on WheelPact!</h5>
                                    <ul className="rrf-list">
                                        <li>
                                            <p>The Reservation Refund Policies are mentioned below:</p>
                                        </li>
                                        <li>
                                            <p>1. The Reservation fee is refundable when the visiting person rejects the vehicle and the reservation cancelled request has been raised by the Partner Dealer.</p>
                                        </li>
                                        <li>
                                            <p>2. The Reservation fee in non-refundable if the person does not visit the vehicle on the scheduled date and time.</p>
                                        </li>
                                        <li>
                                            <p>3. The Reservation fee is non-refundable until the scheduled date & time.</p>
                                        </li>
                                        <li>
                                            <p>4. The 10% service charge mentioned in Bill Summary is non-refundable in any case, only the reservation fee will be refunded.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- RESERVATION REFUND POLICY MODAL ENDS --> */}
        </div>
    );
}

export default Modals