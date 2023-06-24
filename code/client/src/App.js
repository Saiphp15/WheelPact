/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import MainLayout from "./layout/MainLayout";
import { Link } from "react-router-dom";

import PopularStoresCard from "./components/PopularStoresCard";
import FeaturedCarCard from "./components/FeaturedCarCard";
import LatestAdditionCard from "./components/LatestAdditionCard";
import TestimonialCard from "./components/TestimonialCard";

import img1 from "./images/vehicles/img1.png";
import img2 from "./images/vehicles/img2.png";
import img3 from "./images/vehicles/img3.jpg";
import img4 from "./images/vehicles/img4.png";
import img5 from "./images/vehicles/img5.jpg";

import featuredCarImg1 from "./images/vehicles/featuredcarimg1.jpg";
import featuredCarImg2 from "./images/vehicles/featuredcarimg2.jpg";

import testimonialImg1 from "./images/brands/testimonial1.png";
import testimonialImg2 from "./images/brands/testimonial2.png";
import testimonialImg3 from "./images/brands/testimonial3.png";
import testimonialImg4 from "./images/brands/testimonial4.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";


const popularStoreResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const featuredCarResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const latestAdditionsResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const testimonialsResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function App() {
  const [customerInfo, setCustomerInfo] = useState({
    name:'',
    phone:''
})
  useEffect(async () => {
    let options = {
      method: "GET",
      url: "http://localhost:8080/customers/list",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const response = await axios(options);
      console.log(response);
      let resData = response.data;
      setCustomerInfo({
        name:resData.name,
        email:resData.email,
        phone:resData.phone
      })
    } catch (e) {
      //window.location.href= window.location.origin + "/home";
      
    }
  },[]);
  return (
    <div>
      <MainLayout>
        
        {/* <!-- HERO SECTION STARTS --> */}
        <section className="section-spacing banner-section position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-text">
                  <h2>Find the right car or bike</h2>
                  <h1>Guaranteed</h1>
                </div>
                <div className="banner-para mt-3 mb-3">
                  <p>Thoroughly inspected, fully assured cars and bikes,</p>
                  <p>Your search ends here.</p>
                </div>
                <div className="banner-search">
                  <ul
                    className="nav nav-pills mb-3 banner-filter-pills"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li
                      className="nav-item banner-filter-item"
                      role="presentation"
                    >
                      <button
                        className="nav-link banner-filter-link active"
                        id="pills-cars-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-cars"
                        type="button"
                        role="tab"
                        aria-controls="pills-cars"
                        aria-selected="true"
                      >
                        Cars
                      </button>
                    </li>
                    <li
                      className="nav-item banner-filter-item"
                      role="presentation"
                    >
                      <button
                        className="nav-link banner-filter-link"
                        id="pills-bikes-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-bikes"
                        type="button"
                        role="tab"
                        aria-controls="pills-bikes"
                        aria-selected="false"
                      >
                        Bikes
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-cars"
                      role="tabpanel"
                      aria-labelledby="pills-cars-tab"
                    >
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="brand-input form-control"
                          placeholder="Search your Car"
                        />
                        <button className="search-brand-btn" type="button">
                          Search
                        </button>
                      </div>
                      <div className="browse-link">
                        <Link to="/">
                          Browse All Cars{" "}
                          <i className="icofont-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-bikes"
                      role="tabpanel"
                      aria-labelledby="pills-bikes-tab"
                    >
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="brand-input form-control"
                          placeholder="Search your Bike"
                        />
                        <button className="dg-brand-btn" type="button">
                          Search
                        </button>
                      </div>
                      <div className="browse-link">
                        <Link to="/">
                          Browse All Bikes{" "}
                          <i className="icofont-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="app-link d-flex mt-2 mb-2">
                    <Link to="/">
                      <img src="assets/images/google-play-store-transparent.png" />
                    </Link>
                    <Link to="/">
                      <img src="assets/images/apple-store.png" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-img">
                  <img
                    className="img-fluid"
                    src="assets/images/banner-image.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="custom-shape-divider-bottom-1664354376">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
        {/* <!-- HERO SECTION ENDS --> */}

        {/* <!-- BENEFITS SECTION STARTS --> */}
        <section className="section-spacing">
          <div className="container">
            <div className="section-title mb-4">
              <h3>Why Wheelpact?</h3>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="benefits-wrapper">
                  <div className="benefits-icon mb-3">
                    <i className="icofont-badge"></i>
                  </div>
                  <h4>Assured Warranty</h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="benefits-wrapper">
                  <div className="benefits-icon mb-3">
                    <i className="icofont-shield"></i>
                  </div>
                  <h4>Inspected Vehicles</h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="benefits-wrapper">
                  <div className="benefits-icon mb-3">
                    <i className="icofont-bank"></i>
                  </div>
                  <h4>Easy Finance</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- BENEFITS SECTION ENDS --> */}

        {/* <!-- POPULAR STORE SECTION STARTS --> */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="section-title mb-4">
                  <h3>Popular Stores</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <button className="dg-brand-btn">Browse All Stores</button>
                </div>
              </div>
            </div>

            <div className="carousel-wrapper mt-3">
              <Carousel
                responsive={popularStoreResponsive}
                swipeable={true}
                draggable={true}
                ssr={true} /* means to render carousel on server-side. */
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <div className="carousel-container">
                  <Link to="/vehicle-details">
                    <PopularStoresCard
                      data={{
                        imgSrc: img1,
                        title: "Premium Car Dealers",
                        location: "Mumbai",
                        rating: "2.5",
                        reviews: "12",
                      }}
                    />
                  </Link>
                </div>
                <div className="carousel-container">
                  <Link to="/vehicle-details">
                    <PopularStoresCard
                      data={{
                        imgSrc: img2,
                        title: "Delux Car Dealers",
                        location: "Pune",
                        rating: "3.5",
                        reviews: "10",
                      }}
                    />
                  </Link>
                </div>
                <div className="carousel-container">
                  <Link to="/vehicle-details">
                    <PopularStoresCard
                      data={{
                        imgSrc: img3,
                        title: "Delux Car Dealers",
                        location: "Pune",
                        rating: "3.5",
                        reviews: "10",
                      }}
                    />
                  </Link>
                </div>
                <div className="carousel-container">
                  <Link to="/vehicle-details">
                    <PopularStoresCard
                      data={{
                        imgSrc: img4,
                        title: "Delux Car Dealers",
                        location: "Pune",
                        rating: "3.5",
                        reviews: "10",
                      }}
                    />
                  </Link>
                </div>
                <div className="carousel-container">
                  <Link to="/vehicle-details">
                    <PopularStoresCard
                      data={{
                        imgSrc: img5,
                        title: "Delux Car Dealers",
                        location: "Pune",
                        rating: "3.5",
                        reviews: "10",
                      }}
                    />
                  </Link>
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        {/* <!-- POPULAR STORE SECTION ENDS --> */}

        {/* <!-- FEATURED SECTION STARTS --> */}
        <section className="section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="section-title mb-4">
                  <h3>Featured Cars</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <button className="dg-brand-btn">View All</button>
                </div>
              </div>
            </div>

            <div className="carousel-wrapper mt-3">
              <Carousel
                responsive={featuredCarResponsive}
                swipeable={true}
                draggable={true}
                ssr={true} /* means to render carousel on server-side. */
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <div className="carousel-container">
                  <FeaturedCarCard
                    data={{
                      imgSrc: featuredCarImg1,
                      title: "Mercedes-Benz GLE",
                      fuelType: "Diesel",
                      owner: "1",
                      price: "2200000",
                      emi: "15000",
                      mfgYear: "2019",
                      driven: "12000",
                    }}
                  />
                </div>
                <div className="carousel-container">
                  <FeaturedCarCard
                    data={{
                      imgSrc: featuredCarImg2,
                      title: "Porsche Panamera",
                      fuelType: "Petrol",
                      owner: "2",
                      price: "1900000",
                      emi: "13000",
                      mfgYear: "2021",
                      driven: "15000",
                    }}
                  />
                </div>
                <div className="carousel-container">
                  <FeaturedCarCard
                    data={{
                      imgSrc: featuredCarImg1,
                      title: "Mercedes-Benz GLE",
                      fuelType: "Diesel",
                      owner: "1",
                      price: "1700000",
                      emi: "11000",
                      mfgYear: "2020",
                      driven: "8000",
                    }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        {/* <!-- FEATURED SECTION END --> */}

        {/* <!-- LATEST SECTION STARTS --> */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="section-title mb-4">
                  <h3>Latest Additions</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <button className="dg-brand-btn">View All</button>
                </div>
              </div>
            </div>

            <div className="carousel-wrapper mt-3">
              <Carousel
                responsive={latestAdditionsResponsive}
                swipeable={true}
                draggable={true}
                ssr={true} /* means to render carousel on server-side. */
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <div className="carousel-container">
                  <LatestAdditionCard
                    data={{
                      imgSrc: featuredCarImg1,
                      title: "Mercedes-Benz GLE",
                      fuelType: "Diesel",
                      owner: "1",
                      price: "2200000",
                      emi: "15000",
                      mfgYear: "2019",
                      driven: "12000",
                    }}
                  />
                </div>
                <div className="carousel-container">
                  <LatestAdditionCard
                    data={{
                      imgSrc: featuredCarImg2,
                      title: "Porsche Panamera",
                      fuelType: "Petrol",
                      owner: "2",
                      price: "1900000",
                      emi: "13000",
                      mfgYear: "2021",
                      driven: "15000",
                    }}
                  />
                </div>
                <div className="carousel-container">
                  <LatestAdditionCard
                    data={{
                      imgSrc: featuredCarImg1,
                      title: "Mercedes-Benz GLE",
                      fuelType: "Diesel",
                      owner: "1",
                      price: "1700000",
                      emi: "11000",
                      mfgYear: "2020",
                      driven: "8000",
                    }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        {/* <!-- LATEST SECTION ENDS --> */}

        {/* <!-- BRAND SECTION STARTS --> */}
        <section className="section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="section-title mb-4">
                  <h3>Car by Brand</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <button className="dg-brand-btn">View All</button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://www.mahindra.com/assets/cms-images/news-room/resources/images/logos/download/mahindra-sport-utility-vehicle/mahindra-sport-utility-vehicle-hd.png" />
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://1000logos.net/wp-content/uploads/2022/08/Maruti-Suzuki-Logo-2000.png" />
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://1000logos.net/wp-content/uploads/2018/04/Hyundai-logo.png" />
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-logotypes-0.png" />
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-logotypes-0.png" />
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" />
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png" />
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-3">
                <Link to="/">
                  <div className="brand-wrapper">
                    <img src="https://i.pinimg.com/originals/41/7f/11/417f11936859a8d4b561fecdd10f37e4.png" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- BRAND SECTION ENDS --> */}

        {/* <!-- TESTIMONIAL SECTION STARTS --> */}
        <section className="position-relative">
          <div className="container">
            <div className="section-title mb-4">
              <h3>Testimonials</h3>
            </div>
            <div className="carousel-wrapper mt-3">
              <Carousel
                responsive={testimonialsResponsive}
                swipeable={true}
                draggable={true}
                ssr={true} /* means to render carousel on server-side. */
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <div className="carousel-container">
                  <TestimonialCard
                    data={{
                      imgSrc: testimonialImg1,
                      customerName: "Louis Lane",
                      message:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    }}
                  />
                </div>
                <div className="carousel-container">
                  <TestimonialCard
                    data={{
                      imgSrc: testimonialImg2,
                      customerName: "John Mendes",
                      message:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    }}
                  />
                </div>
                <div className="carousel-container">
                  <TestimonialCard
                    data={{
                      imgSrc: testimonialImg3,
                      customerName: "Dwayne Johnson",
                      message:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    }}
                  />
                </div>
                <div className="carousel-container">
                  <TestimonialCard
                    data={{
                      imgSrc: testimonialImg4,
                      customerName: "Matt Smith",
                      message:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    }}
                  />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="custom-shape-divider-bottom-1664694876">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
        {/* <!-- TESTIMONIAL SECTION ENDS --> */}

        {/* <!-- CALL TO ACTION SECTION STARTS --> */}
        <section className="cta-background section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="cta-title">
                  <h2>Confused in buying your dream vehicle ?</h2>
                </div>
                <div className="cta-para">
                  <p>
                    Our experts are here to help you out to find the best car
                    under your budget.
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="cta-wrapper">
                      <div className="cta-box">
                        <div className="cta-icon-holder">
                          <i className="icofont-ui-call"></i>
                        </div>
                        <div className="cta-details">
                          <h4>Call Us At:</h4>
                          <Link to="/">
                            <p>+91 95941 27932</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="cta-wrapper">
                      <div className="cta-box">
                        <div className="cta-icon-holder">
                          <i className="icofont-envelope"></i>
                        </div>
                        <div className="cta-details">
                          <h4>Mail Us At:</h4>
                          <Link to="/">
                            <p>support@wheelpact.com</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="cta-wrapper">
                      <div className="cta-box">
                        <div className="cta-icon-holder">
                          <i className="icofont-whatsapp"></i>
                        </div>
                        <div className="cta-details">
                          <h4>WhatsApp Us:</h4>
                          <Link to="/">
                            <p>+91 95941 27932</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </section>
        {/* <!-- CALL TO ACTION SECTION ENDS --> */}
      </MainLayout>
    </div>
  );
}

export default App;
