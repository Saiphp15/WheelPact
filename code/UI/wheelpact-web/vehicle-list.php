<?php
include("functions.php");
include("header.php");
?>

<!-- FILTER CANVAS STARTS -->

<div class="offcanvas offcanvas-end filter-border" tabindex="-1" id="filterCanvas" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header filter-header">
        <h5 id="offcanvasRightLabel">All Filters</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="container">
            <div class="filter-wrapper pb-3">
                <div class="filter-title">
                    <h6>Price Range</h6>
                </div>
                <div class="row mt-4">
                    <div class="col-sm-12">
                        <div id="slider-range"></div>
                    </div>
                </div>
                <div class="row slider-labels">
                    <div class="col-sm-6 caption">
                        <strong>Min:</strong> <span id="slider-range-value1"></span>
                    </div>
                    <div class="col-sm-6 text-end caption">
                        <strong>Max:</strong> <span id="slider-range-value2"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <form>
                            <input type="hidden" name="min-value" value="">
                            <input type="hidden" name="max-value" value="">
                        </form>
                    </div>
                </div>
            </div>

            <div class="filter-wrapper mt-3 pb-3">
                <div class="filter-title">
                    <h6>Make & Model</h6>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <select class="brand-select mt-2">
                            <option selected>Select Make</option>
                            <option value="1">Maruti Suzuki</option>
                            <option value="2">Mahindra</option>
                            <option value="3">Tata</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="brand-select mt-2">
                            <option selected>Select Model</option>
                            <option value="1">Ertiga</option>
                            <option value="2">Ciaz</option>
                            <option value="3">Swift</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="filter-wrapper mt-3 pb-3">
                <div class="filter-title">
                    <h6>Year</h6>
                </div>

                <div class="filter-radio-button">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2020">
                        <label class="form-check-label" for="flexRadioDefault1">
                            2020 & Above
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            2019 & Above
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            2018 & Above
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            2017 & Above
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            2016 & Above
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            2015 & Above
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            2012 & Above
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            2010 & Above
                        </label>
                    </div>
                </div>
            </div>

            <div class="filter-wrapper mt-3 pb-3">
                <div class="filter-title">
                    <h6>Kms Drivens</h6>
                </div>

                <div class="filter-radio-button">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2020">
                        <label class="form-check-label" for="flexRadioDefault1">
                            10,000 KMs and less
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            30,000 KMs and less
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            50,000 KMs and less
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            75,000 KMs and less
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="yearId2019">
                        <label class="form-check-label" for="flexRadioDefault2">
                            1,00,0000 KMs and less
                        </label>
                    </div>
                </div>
            </div>

            <div class="filter-wrapper mt-3 pb-3">
                <div class="filter-title">
                    <h6>Engine Type</h6>
                </div>

                <div class="filter-check">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Petrol
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Diesel
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Petrol + CNG
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            CNG
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Electric
                        </label>
                    </div>
                </div>
            </div>

            <div class="filter-wrapper mt-3 pb-3">
                <div class="filter-title">
                    <h6>Body Type</h6>
                </div>

                <div class="filter-check">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Hatchback
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Sedan
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Luxury Sedan
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            SUV
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Luxury SUV
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            MUV
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Sports
                        </label>
                    </div>
                </div>
            </div>

            <div class="filter-wrapper mt-3 pb-3">
                <div class="filter-title">
                    <h6>Transmission</h6>
                </div>

                <div class="filter-check">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Manual
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            Automatic
                        </label>
                    </div>
                </div>
            </div>

            <div class="filter-wrapper mt-3 pb-3">
                <div class="filter-title">
                    <h6>Owner</h6>
                </div>

                <div class="filter-check">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            1st Owner
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            2nd Owner
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                        <label class="form-check-label" for="flexCheckChecked">
                            2nd+ Owner
                        </label>
                    </div>
                </div>
            </div>

            <div class="d-grid filter-btn text-center mt-2">
                <button class="dg-brand-btn">Apply Filters</button>
            </div>
        </div>
    </div>
</div>

<!-- FILTER CANVAS ENDS -->

<section class="section-spacing">
    <div class="container">
        <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
            <ol class="breadcrumb brand-breadcrumb">
                <li class="breadcrumb-item brand-breadcrumb-item"><a href="index.php">Home</a></li>
                <li class="breadcrumb-item brand-breadcrumb-item active" aria-current="page">Used Cars</li>
            </ol>
        </nav>

        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="list-result mb-md-2">
                    <p>276 Used Cars in Location | Store Name</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-flex float-md-end">
                    <select class="brand-select me-2">
                        <option selected value="1">Price: Low to High</option>
                        <option value="2">Price: High to Low</option>
                        <option value="3">Kms Driven: Low to High</option>
                        <option value="4">Kms Driven: High to Low</option>
                    </select>
                    <button class="dg-brand-btn" data-bs-toggle="offcanvas" data-bs-target="#filterCanvas">Filters</button>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="vehicle-list">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
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

                        <div class="wishlist">
                            <i class="icofont-heart"></i>
                        </div>
                    </div>
                    <div class="vehicle-price d-flex align-items-center">
                        <h5>₹56,00,0000</h5>
                        <h6>(Negotiable)</h6>
                    </div>
                    <div class="vehicle-emi d-flex">
                        <h6>EMI from</h6>
                        <h6>40,000/month</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
include("footer.php");
?>