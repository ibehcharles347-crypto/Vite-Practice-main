import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

function HeroComponent() {
  return (
    <section className="hero-section">
      <div id="sleepwearCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#sleepwearCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#sleepwearCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#sleepwearCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="3000">
            <img src="../public/images/sleepwear1.png" className="d-block w-100 hero-img" alt="Luxury Sleepwear 1" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start">
              <h1 className="display-4 fw-bold">Luxury Comfort</h1>
              <p className="lead">Soft, breathable, and made for dreamy nights.</p>
              <button className="btn btn-light btn-lg">Shop Now</button>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src="../public/images/sleepwear2.png" className="d-block w-100 hero-img" alt="Luxury Sleepwear 2" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start">
              <h1 className="display-4 fw-bold">Dreamy Elegance</h1>
              <p className="lead">Experience premium fabric designed for true relaxation.</p>
              <button className="btn btn-light btn-lg">Explore Collection</button>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src="../public/images/sleepwear3.jpg" className="d-block w-100 hero-img" alt="Luxury Sleepwear 3" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start">
              <h1 className="display-4 fw-bold">Sleep in Style</h1>
              <p className="lead">Timeless designs for peaceful nights and cozy mornings.</p>
              <button className="btn btn-light btn-lg">Discover More</button>
            </div>
          </div>

        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#sleepwearCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#sleepwearCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </section>
  );
}

export default HeroComponent;
