import React from "react";
import image from "../assets/images/newarrivals.png";

const NewArrivals = () => {
    return (
        <div className="new-arrivals row  align-items-center overflow-hidden">
            <div className="col-md-6 mb-4">
                <h2>#New_Arrivals</h2>
                <p>Discover the latest additions to our collection! From trendy apparel to cutting-edge gadgets, our new arrivals are designed to keep you ahead of the curve. Explore fresh styles and innovative products that cater to your unique taste and lifestyle. Don't miss out on the opportunity to elevate your wardrobe with our exciting new offerings.</p>    
                <button className="btn bg-theme px-4">Shop Now</button>
            </div>
            <div className="newarrivalsimg col-md-6 text-center" style={{height:"100%"}}>
                <img src={image} alt="New Arrivals" className="newarrivalsimg img-fluid" />
            </div>
            
        </div>
    );
}

export default NewArrivals;