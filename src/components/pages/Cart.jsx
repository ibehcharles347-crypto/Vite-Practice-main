import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeFromCart, cartTotal, checkout } = useCart();
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            <h2>Your Cart</h2>

            {cartItems.length === 0 && <p>Your cart is empty.</p>}

            {cartItems.map(item => (
                <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center border p-3 mb-3"
                >
                    <div>
                        <h5>{item.name}</h5>
                        <p>${item.price}</p>
                        <p>Qty: {item.quantity}</p>
                    </div>

                    <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            {cartItems.length > 0 && (
                <div className="border-top pt-4 mt-4">
                    <h4>Total: ${cartTotal.toFixed(2)}</h4>

                    <button
                        className="btn btn-success mt-3 w-100"
                        onClick={() => navigate("/checkout")}
                    >
                        Proceed to checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
