import React from "react";
import { testimonialData } from "./testimonial";

function Testimonial({ darkMode }) {
    return (
        <div className="container">
            <div className="testimonial text-center mb-5">
                <h2>What Our Customers Say</h2>
                <p >Hear from our satisfied customers who love our products and services.</p>
            </div>
            <div className="row">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="col-md-4 mb-4"> 
                        <div className={darkMode ? "card bg-dark text-white h-100 rounded-4 border-0" : "card rounded-4 border-0 bg-white text-dark h-100"}>
                            <div className="card-body text-center shadow border-0 rounded-4">
                                <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mb-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                <h5 className="card-title">{testimonial.name}</h5>
                                <span className="text-muted">{testimonial.role}</span>
                                <p className="card-text">"{testimonial.testimonial}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default Testimonial;
