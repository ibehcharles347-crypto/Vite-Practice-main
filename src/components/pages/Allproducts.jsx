import React, { useState } from "react";
import "./Allproducts.css"
import { productCategory } from "../productData";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";



const AllProducts = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { addToCart } = useCart();
    const navigate = useNavigate();


    // toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    // handle category click
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
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
                    <div className={"leftsidebar col-md-3 col-lg-2 border p-3 text-start d-flex flex-column justify-content-between"} style={{height:"87vh", position:"sticky", top:"100px", zIndex:"999"
                    }}>
                        <div>
                        <button
                            onClick={toggleDropdown}
                            className={darkMode ? "allprodBtn text-start btn w-100 text-white": "allprodBtn text-start btn w-100 text-dark"}
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
                                    className={darkMode ? 'allprodBtn text-white text-start btn w-100 ' : 'allprodBtn text-dark text-start btn w-100 '}
                                    onClick={() => handleCategoryClick("All")}
                                >
                                    All Products
                                </button>

                                {Object.keys(productCategory).map((category) => (
                                    <button
                                        key={category}
                                        className={darkMode ? " text-white allprodBtn text-start btn w-100" : "text-dark allprodBtn text-start btn w-100"}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                        </div>
                        <div className="text-center bg-danger d-none d-lg-block" style={{height:"18rem"}}>
                            <div className="text-center pt-4"><h1>30% Off <p>sales</p></h1>
                            <h3>Coming Up this Friday</h3>
                            <p><span className="text-primary text-decoration-underline" onClick={()=> navigate("/newsletter")}>Subscribe</span> to our newsletter for more updates like this</p></div>
                        </div>
                    </div>

                    {/* PRODUCTS SECTION */}

                    <div className="col-md-9 col-lg-10 products-section text-center py-5">
                        <h2>
                            {selectedCategory === "All"
                                ? "Our Products"
                                :  <h2>{selectedCategory}</h2> }
                        </h2>

                        <p>Explore our wide range of products.</p>
                        <div className="container">        
                        <div className="row">
                            {displayedProducts.map((product) => (
                                <div className="px-5 col-md-6 col-lg-4" key={product.id}>
                                    <div
                                        className="card mb-4 shadow rounded-5 mx-auto"
                                    >
                                        <div className=""  
                                        >
                                            <img
                                                src={product.image}
                                                className="rounded-top-5 img-fluid prod-img"
                                                alt={product.name}
                                            />
                                        </div>

                                        <div className="card-body pb-4 prod-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="">{product.description}</p>
                                            <span className="price">
                                                <strong>${product.price}</strong>
                                            </span>

                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <button className="addtocartbtn bg-black btn text-white" onClick={() => addToCart(product)}>
                                                    Add to cart
                                                </button>
                                                <button className="checkoutbtn btn" onClick={() => {addToCart(product), navigate("/cart")} }>Buy Now</button>
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
