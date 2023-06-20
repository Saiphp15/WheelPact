<?php
include("functions.php");
include("header.php");
?>

<section class="section-spacing">
    <div class="container">
        <div class="plan-page-content">
            <h2>Plans to suit all sizes of Business</h2>
            <p>Upgrade or cancel your plan anytime.</p>
        </div>

        <div class="row">
            <div class="toggle-switch">
                <div class="control">
                    <!-- switch button -->
                    <p>Yearly</p><!-- yearly -->
                    <label class="switch">
                        <input class="switcher" type="checkbox" checked="" data-toggle="toggle" data-on="Annually" data-off="Monthly">
                        <span class="slider"></span>
                    </label>
                    <p>Monthly</p><!-- monthly -->
                </div>
            </div>

            <div class="switcher-tagline">
                <p>Get 10% off on our Yearly Plans.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                <div class="plan-wrapper">
                    <div class="plan-title">
                        <h3>Basic</h3>
                    </div>

                    <div class="plan-price">
                        <sup>₹</sup>
                        <div id="basic-plan" class="amount">
                            1,999 </div>
                        <div class="amount-duration">/mo</div>
                    </div>
                    <div class="striked-plan">
                        <h6>₹23,888/yr</h6>
                    </div>
                    <div class="tax-noti">
                        <p>(Inclusive of all taxes)</p>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="dg-brand-btn" type="button">Get Started</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="plan-wrapper">
                    <div class="plan-title">
                        <h3>Premium</h3>
                    </div>

                    <div class="recommended-badge">
                        <h6>Recommended</h6>
                    </div>

                    <div class="plan-price">
                        <sup>₹</sup>
                        <div id="premium-plan" class="amount">
                            4,999 </div>
                        <div class="amount-duration">/mo</div>
                    </div>
                    <div class="striked-plan">
                        <h6>₹59,988/yr</h6>
                    </div>
                    <div class="tax-noti">
                        <p>(Inclusive of all taxes)</p>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="dg-brand-btn" type="button">Get Started</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="plan-wrapper">
                    <div class="plan-title">
                        <h3>Enterprise</h3>
                    </div>

                    <div class="plan-price">
                        <sup>₹</sup>
                        <div id="enterprise-plan" class="amount">
                            8,999 </div>
                        <div class="amount-duration">/mo</div>
                    </div>
                    <div class="striked-plan">
                        <h6>₹1,07,988/yr</h6>
                    </div>
                    <div class="tax-noti">
                        <p>(Inclusive of all taxes)</p>
                    </div>

                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="dg-brand-btn" type="button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</section>

<section>
    <div class="container">
        <div class="plan-page-content mb-4">
            <h2>Plans & Features</h2>
            <p>Get the best feature offerings from WheelPact</p>
        </div>

        <div class="plan-table-wrapper">
            <div class="table-head-stick">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Features</th>
                            <th scope="col" class="text-center">Basic</th>
                            <th scope="col" class="text-center">Premium</th>
                            <th scope="col" class="text-center">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Online Showroom</th>
                            <td class="feature-available">
                                <i class="icofont-check-circled"></i>
                            </td>
                            <td class="feature-available">
                                <i class="icofont-check-circled"></i>
                            </td>
                            <td class="feature-available">
                                <i class="icofont-check-circled"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">24x7 Support</th>
                            <td>
                                <div class="feature-available">
                                    <i class="icofont-check-circled"></i>
                                </div>
                            </td>
                            <td>
                                <div class="feature-available">
                                    <i class="icofont-check-circled"></i>
                                </div>
                            </td>
                            <td>
                                <div class="feature-available">
                                    <i class="icofont-check-circled"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Unlimited Users Reach</th>
                            <td>
                                <div class="feature-available">
                                    <i class="icofont-check-circled"></i>
                                </div>
                            </td>
                            <td>
                                <div class="feature-available">
                                    <i class="icofont-check-circled"></i>
                                </div>
                            </td>
                            <td>
                                <div class="feature-available">
                                    <i class="icofont-check-circled"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Category Listing</th>
                            <td>Cars or Bikes (Any 1)</td>
                            <td>Cars and Bike (Both)</td>
                            <td>Cars and Bike (Both)</td>
                        </tr>
                        <tr>
                            <th scope="row">Maximum Vehicle Listing</th>
                            <td>10 per Month</td>
                            <td>100 per Month</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <th scope="row">Free Inventory Promotions</th>
                            <td>2</td>
                            <td>5</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <th scope="row">Free Showroom Promotions</th>
                            <td>
                                <div class="feature-unavailable">
                                    <i class="icofont-close-circled"></i>
                                </div>
                            </td>
                            <td>5</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <th scope="row">Showroom Branch Listing</th>
                            <td>
                                <div class="feature-unavailable">
                                    <i class="icofont-close-circled"></i>
                                </div>
                            </td>
                            <td>5</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <th scope="row">Monthly Pricing</th>
                            <td>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="dg-brand-btn" type="button">₹1,999/mo</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="dg-brand-btn" type="button">₹4,999/mo</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="dg-brand-btn" type="button">₹8,999/mo</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Yearly Pricing</th>
                            <td>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="dg-brand-btn" type="button">₹21,589.2/yr</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="dg-brand-btn" type="button">₹53,989.2/yr</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="dg-brand-btn" type="button">₹97,189.2/yr</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<?php
include("footer.php");
?>