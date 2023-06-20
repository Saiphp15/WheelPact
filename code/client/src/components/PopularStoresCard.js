import React from "react";

const PopularStoresCard = props => {
    let { imgSrc, title, location, rating, reviews } = props.data;
    return (
        <div>
            <div className="store-wrapper">
                <img src={imgSrc} className="img-responsive" />
                
                <div className="store-details-box">
                    <div className="store-wrapper-title">
                        <h5>{title}</h5>
                    </div>
                    <div className="d-flex store-location">
                        <i className="icofont-pin"></i>
                        <h6>{location}</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="store-rating-icon">
                            <i className="icofont-star"></i>
                        </div>
                        <div className="store-rating-count">{rating}</div>
                        <div className="store-reviews">({reviews} Reviews)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularStoresCard