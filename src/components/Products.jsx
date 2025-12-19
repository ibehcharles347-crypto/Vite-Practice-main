import React from "react";
import { OurProducts } from "./products";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Products = () => {

    const { addToCart } = useCart();
    const navigate = useNavigate();
    return (
        <div className="container products-section text-center py-5">
            <h2>Our Products</h2>
            <p>Explore our wide range of products.</p>

            <div className="row">
                {OurProducts.map((product)=> (<div className="col-md-6 col-lg-4" key={product.id}>
                    <div className="card mb-4 shadow rounded-5 w-75 mx-auto" style={{height:"500px"}}>
                        <div className="rounded-top-5 overflow-hidden">
                            <img src={product.image} className="card-img-top img-fluid" alt={product.name} style={{height:"350px", objectFit:"cover"}}/>
                        </div>
                        <div className="card-body pb-4">
                            <h5 className="card-title">{product.name}</h5>
                            <span className="price"><strong>${product.price}</strong></span>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <button onClick={()=>{addToCart(product)}} className="addtocartbtn bg-black btn text-white">Add to cart</button>
                                <button onClick={()=>{addToCart(product), navigate("/cart")}} className="checkoutbtn btn float-end">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
            <div className="my-4">
                <button className="btn bg-theme px-4" onClick={()=>{navigate("/products&services")}}>View All Products</button>
            </div>

        </div>     

    );
}
export default Products;