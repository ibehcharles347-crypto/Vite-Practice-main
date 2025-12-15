import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cartItems, cartTotal, checkout } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // simple validation
        for (let key in formData) {
            if (!formData[key]) {
                alert("Please fill all fields");
                return;
            }
        }

        checkout(); // clears cart
        navigate("/success"); // redirect
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">Checkout</h2>

            <div className="row">
                {/* LEFT — FORM */}
                <div className="col-md-7">
                    <form onSubmit={handleSubmit} className="border p-4 rounded-4">
                        <h5>Billing Details</h5>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="form-control mb-3"
                            value={formData.fullName}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control mb-3"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="form-control mb-3"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <textarea
                            name="address"
                            placeholder="Delivery Address"
                            className="form-control mb-3"
                            rows="3"
                            value={formData.address}
                            onChange={handleChange}
                        />

                        <button type="submit" className="btn btn-success w-100">
                            Place Order
                        </button>
                    </form>
                </div>

                {/* RIGHT — ORDER SUMMARY */}
                <div className="col-md-5">
                    <div className="border p-4 rounded-4">
                        <h5>Order Summary</h5>

                        {cartItems.map(item => (
                            <div
                                key={item.id}
                                className="d-flex justify-content-between mb-2"
                            >
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>${item.price * item.quantity}</span>
                            </div>
                        ))}

                        <hr />
                        <h5>Total: ${cartTotal.toFixed(2)}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
