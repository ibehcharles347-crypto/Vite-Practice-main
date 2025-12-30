import React, { useState } from "react";
import "./Allproducts.css";
import { productCategory } from "../productData";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const AllProducts = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };

    const allProducts = Object.values(productCategory).flat();

    const displayedProducts =
        selectedCategory === "All"
            ? allProducts
            : productCategory[selectedCategory];

    return (
        <section className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}>
            <div className="container-fluid">
                <div className="row">

                    {/* LEFT SIDEBAR */}
                    <div
                        className="
              leftsidebar
              col-12
              col-md-4
              col-lg-2
              border
              p-3
              text-start
              d-flex
              flex-column
              justify-content-between
              mb-4
              mb-lg-0
            "
                    >
                        {/* CATEGORY BUTTON */}
                        <div>
                            <button
                                onClick={toggleDropdown}
                                className={`allprodBtn btn w-100 text-start ${darkMode ? "text-white" : "text-dark"
                                    }`}
                            >
                                All Categories{" "}
                                <i
                                    className={`bi ${isOpen ? "bi-caret-down-fill" : "bi-caret-right-fill"
                                        }`}
                                />
                            </button>

                            {/* 🔥 ANIMATED COLLAPSE */}
                            <div className={`category-collapse ${isOpen ? "open" : ""}`}>
                                <button
                                    className={`allprodBtn btn w-100 text-start ${darkMode ? "text-white" : "text-dark"
                                        }`}
                                    onClick={() => handleCategoryClick("All")}
                                >
                                    All Products
                                </button>

                                {Object.keys(productCategory).map(category => (
                                    <button
                                        key={category}
                                        className={`allprodBtn btn w-100 text-start ${darkMode ? "text-white" : "text-dark"
                                            }`}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* PROMO (DESKTOP ONLY) */}
                        <div className="promo-box d-none d-lg-flex">
                            <div className="text-center text-white px-3">
                                <h1 className="fw-bold">
                                    30% Off
                                    <p className="fs-5">Sales</p>
                                </h1>
                                <h6>Coming Up This Friday</h6>
                                <p className="mt-3">
                                    <span
                                        className="text-primary text-decoration-underline"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => navigate("/newsletter")}
                                    >
                                        Subscribe
                                    </span>{" "}
                                    to our newsletter
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCTS SECTION */}
                    <div className="col-12 col-md-8 col-lg-10 products-section py-4 py-lg-5">
                        <div className="text-center mb-4">
                            <h2>
                                {selectedCategory === "All"
                                    ? "Our Products"
                                    : selectedCategory}
                            </h2>
                            <p className="text-muted">
                                Explore our wide range of products.
                            </p>
                        </div>

                        <div className="container">
                            <div className="row g-4">

                                {displayedProducts.map(product => (
                                    <div
                                        key={product.id}
                                        className="col-12 col-sm-6 col-lg-4"
                                    >
                                        <div className="card h-100 shadow rounded-5 product-card">

                                            {/* 🔥 IMAGE ASPECT RATIO FIX */}
                                            <div className="product-image-wrapper">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="product-image"
                                                />
                                            </div>

                                            <div className="card-body d-flex flex-column">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="small flex-grow-1">
                                                    {product.description}
                                                </p>

                                                <strong className="mb-3">
                                                    ${product.price}
                                                </strong>

                                                <div className="d-flex flex-column flex-sm-row gap-2">
                                                    <button
                                                        className="addtocartbtn bg-black btn text-white w-100"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        Add to Cart
                                                    </button>

                                                    <button
                                                        className="checkoutbtn btn w-100"
                                                        onClick={() => {
                                                            addToCart(product);
                                                            navigate("/cart");
                                                        }}
                                                    >
                                                        Buy Now
                                                    </button>
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
            </div>
        </section>
    );
};

export default AllProducts;
