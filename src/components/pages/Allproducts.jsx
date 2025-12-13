import React, { useState } from "react";
import { allProducts } from "../Allproducts";
import "./Allproducts.css"
import { productCategory } from "../productData";

const AllProducts = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    // handle category click
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsOpen(false); // close dropdown after click
    };

    // flatten products OR filter by category
    const allProducts = Object.values(productCategory).flat();

    const displayedProducts =
        selectedCategory === "All"
            ? allProducts
            : productCategory[selectedCategory];

    return (
        <section className={darkMode ? " bg-dark text-white" : " bg-white text-dark"}>
                <div className="row">
                    {/* LEFT SIDEBAR */}
                    <div className="col-md-2 border p-3 text-start">
                        <button
                            onClick={toggleDropdown}
                            className="allprodBtn text-start btn w-100"
                        >
                            All Categories{" "}
                            <i
                                className={`bi ${isOpen ? "bi-caret-down-fill" : "bi-caret-right-fill"
                                    }`}
                            />
                        </button>

                        {isOpen && (
                            <div className="mt-2">
                                <button
                                    className="allprodBtn text-start btn w-100"
                                    onClick={() => handleCategoryClick("All")}
                                >
                                    All Products
                                </button>

                                {Object.keys(productCategory).map((category) => (
                                    <button
                                        key={category}
                                        className="allprodBtn text-start btn w-100"
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* PRODUCTS SECTION */}

                    <div className="col-md-10 products-section text-center py-5">
                        <h2>
                            {selectedCategory === "All"
                                ? "Our Products"
                                :  <h2>{selectedCategory}</h2> }
                        </h2>

                        <p>Explore our wide range of products.</p>
                        <div className="container">        
                        <div className="row">
                            {displayedProducts.map((product) => (
                                <div className="px-5 col-md-4" key={product.id}>
                                    <div
                                        className="card mb-4 shadow rounded-5 mx-auto"
                                        style={{ height: "500px" }}
                                    >
                                        <div className="rounded-top-5 overflow-hidden">
                                            <img
                                                src={product.image}
                                                className="card-img-top img-fluid"
                                                alt={product.name}
                                                style={{ height: "" }}
                                            />
                                        </div>

                                        <div className="card-body pb-4">
                                            <h5 className="card-title">{product.name}</h5>
                                            <span className="price">
                                                <strong>${product.price}</strong>
                                            </span>

                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <button className="addtocartbtn bg-black btn text-white">
                                                    Add to cart
                                                </button>
                                                <button className="checkoutbtn btn">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {displayedProducts.length === 0 && (
                                <p className="text-center">No products found.</p>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default AllProducts;
