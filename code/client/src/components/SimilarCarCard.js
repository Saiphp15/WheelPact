import React from "react";
import { Link } from "react-router-dom";

const SimilarCarCard = props => {
    let { imgSrc, title, mfgYear, driven, fuelType, owner, price, emi } = props.data;
    return (
        <div className="vehicle-wrapper">
            <Link to='/vehicle-details'>
                <img src={imgSrc} alt="Featured Car Img" />
            </Link>

            <div className="vehicle-wrapper-title">
                <Link to='/vehicle-details'>
                    <h5>{title}</h5>
                </Link>
            </div>
            <div className="d-flex vehicle-overview">
                <div className="overview-badge">
                    <h6>Year</h6>
                    <h5>{mfgYear}</h5>
                </div>

                <div className="overview-badge">
                    <h6>Driven</h6>
                    <h5>{driven}km</h5>
                </div>

                <div className="overview-badge">
                    <h6>Fuel Type</h6>
                    <h5>{fuelType}</h5>
                </div>

                <div className="overview-badge">
                    <h6>Owner</h6>
                    <h5>{owner}st</h5>
                </div>

                <div className="wishlist">
                    <i className="icofont-heart"></i>
                </div>

                <div className="verified-tag">
                    <span className="verification-badge"><i className="icofont-check-circled"></i> Verified Seller</span>
                </div>
            </div>
            <div className="vehicle-price d-flex align-items-center">
                <h5>₹{price}</h5>
                <h6>(Negotiable)</h6>
            </div>
            <div className="vehicle-emi d-flex">
                <h6>EMI from</h6>
                <h6>{emi}/month</h6>
            </div>
        </div>
    );
}

export default SimilarCarCard