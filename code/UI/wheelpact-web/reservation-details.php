<?php
include("functions.php");
include("header.php");
?>

<section class="section-spacing">
    <div class="container">
        <div class="row">
            <div class="section-title">
                <h3>Reservation details</h3>
            </div>
            <div class="col-md-6 col-lg-5">
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
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-7">
                <div class="reservation-details-wrap">
                    <div class="row">
                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Reservation ID</h6>
                                <h4>#896889</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Date of Reservation</h6>
                                <h4>19-12-2022</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Visitor Name</h6>
                                <h4>Sultan Ahmed Siddiqui</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Identification Document</h6>
                                <h4>Aadhaar Card</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Visiting Date</h6>
                                <h4>21-12-2022</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Visiting Time</h6>
                                <h4>12:30PM-1:30PM</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Payment Status</h6>
                                <h4>Paid</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Payment Menthod</h6>
                                <h4>Online Payment</h4>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="mb-3">
                                <h6>Amount Paid</h6>
                                <h4>₹2200</h4>
                            </div>
                        </div>
                    </div>

                    <div class="d-grid gap-2 col-6 mx-auto mt-2">
                        <button class="dg-brand-btn" type="button">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
include("footer.php");
?>