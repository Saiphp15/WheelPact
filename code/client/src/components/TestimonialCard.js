import React from "react";

const TestimonialCard = props => {
    let { imgSrc, customerName, message } = props.data;
    return (
        <div className="testimonials-wrapper">
            <img src={imgSrc} />
            <h5>{customerName}</h5>
            <p>{message}</p>
        </div>
    );
}

export default TestimonialCard