import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container py-5 text-center">
      <h2>🎉 Order Successful!</h2>
      <p>Thank you for your purchase.</p>

      <Link to="/products" className="btn btn-primary mt-3">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;
