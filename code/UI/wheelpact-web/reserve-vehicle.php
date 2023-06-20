<?php
include("functions.php");
include("header.php");
?>

<section class="section-spacing">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-7">
                <div class="section-title">
                    <h3>Reserve Now</h3>
                </div>
                <div class="reserve-steps-wrapper">
                    <div class="reserve-steps">
                        <div class="steps-number">
                            <span>1</span>
                        </div>
                        <div class="steps-content">
                            <h5>Schedule your visit</h5>
                            <p>Choose date & time with in 48 hours i.e is 2-days as per your availablity to visit the vehicle.</p>
                        </div>
                    </div>

                    <div class="reserve-steps">
                        <div class="steps-number">
                            <span>2</span>
                        </div>
                        <div class="steps-content">
                            <h5>Pay Reservation Amount</h5>
                            <p class="mb-0">Pay a reservation amount of ₹2000 to reserve the vehicle.</p>
                            <div class="rrp">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#reservationRefundModal">Read Reservation Refund Policy</a>
                            </div>
                        </div>
                    </div>

                    <div class="reserve-steps">
                        <div class="steps-number">
                            <span>3</span>
                        </div>
                        <div class="steps-content">
                            <h5>Buy the vehicle</h5>
                            <p>Pay the pending amount in cash or our partners would help you with the best available finance support.</p>
                        </div>
                    </div>

                    <div class="reserve-steps">
                        <div class="steps-number">
                            <span>4</span>
                        </div>
                        <div class="steps-content">
                            <h5>Ownership Transfer</h5>
                            <p>Our partners will handle the complete document process to transfer the vehicle ownership.</p>
                        </div>
                    </div>

                    <div class="reserve-steps">
                        <div class="steps-number">
                            <span>5</span>
                        </div>
                        <div class="steps-content">
                            <h5>Take Delivery</h5>
                            <p>Done with the purchase take the vehicle at your home as simple as that.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="section-title">
                    <h3>Schedule visit</h3>
                </div>
                <div class="visit-wrap">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="brand-label mb-1">Full Name<span class="required">*</span></label>
                                <input type="text" class="brand-input" readonly value="Sultan Ahmed Siddiqui">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="brand-label mb-1">Email Address<span class="required">*</span></label>
                                <input type="email" class="brand-input" readonly value="sultansiddiqui33@gmail.com">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="brand-label mb-1">Date<span class="required">*</span></label>
                                <input type="date" class="brand-input">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="brand-label mb-1">Time<span class="required">*</span></label>
                                <input type="time" class="brand-input">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="brand-label mb-1">Identification Document<span class="required">*</span></label>
                                <select class="brand-select">
                                    <option>Aadhaar Card</option>
                                    <option>License</option>
                                    <option>Pancard</option>
                                    <option>Passport</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-title">
                    <h3>Bill Summary</h3>
                </div>
                <div class="bill-summary-wrapper">
                    <div class="vehicle-wrapper">
                        <a href="#">
                            <img src="https://cdn.bigboytoyz.com/new-version/products/mercedes-gle300d-white-7077.jpg">
                        </a>

                        <div class="vehicle-wrapper-title">
                            <a href="#">
                                <h5>Mercedes-Benz GLE</h5>
                            </a>
                        </div>
                        <div class="d-flex vehicle-overview">
                            <div class="overview-badge">
                                <h6>Year</h6>
                                <h5>2021</h5>
                            </div>

                            <div class="overview-badge">
                                <h6>Driven</h6>
                                <h5>50,000km</h5>
                            </div>

                            <div class="overview-badge">
                                <h6>Fuel Type</h6>
                                <h5>Diesel</h5>
                            </div>

                            <div class="overview-badge">
                                <h6>Owner</h6>
                                <h5>1st</h5>
                            </div>
                        </div>
                        <div class="vehicle-price d-flex align-items-center">
                            <h5>₹56,00,0000</h5>
                            <h6>(Negotiable)</h6>
                        </div>

                        <div class="bill-table-wrap">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Reservation Fee</th>
                                        <td>₹2000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Service Charge Fee (10%)</th>
                                        <td>₹200</td>
                                    </tr>
                                    <tr class="bill-total">
                                        <th scope="row">Total Amount</th>
                                        <td colspan="2">₹2200</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="rrp text-center">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#reservationRefundModal">Read Reservation Refund Policy</a>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I agree with Reservation Refund Policy and Terms & Conditions
                                    </label>
                                </div>
                            </div>

                            <div class="d-grid gap-2 col-6 mx-auto mt-3">
                                <button class="dg-brand-btn">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
include("footer.php");
?>