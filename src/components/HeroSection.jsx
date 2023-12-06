import React from 'react'
import video from '../assets/video/hero.mp4';
import '../styles/HeroSection.css'
import ExpSvg from '../assets/svg/user-people-svgrepo-com.svg'
import ExpSvg1 from '../assets/svg/trip.svg'
import ExpSvg2 from '../assets/svg/money.svg'
import ExpSvg3 from '../assets/svg/nature.svg'

function HeroSection() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner hero-container">
          <div class="carousel-item active">
            <video src={video} autoPlay loop muted /> 
            <h2>Experience the Difference!</h2>
            <h1 className="slide">
             Discover
            </h1>
          </div>
       </div>
       <div className="button-hero">
        <div class="form-group has-search">
          <input type="text" className="form-control search-hero" placeholder="Search Trips"/>
        </div>
      </div>
      <div className="mileston-flex">
        <div className="mileston-content">
          <div className="mileston-icon">
            <img src={ExpSvg} alt="Experience CSVG" className="svg_1"/>
            <span className="text_2"> 200+ </span><span className="text_2">TripAdvisor Review</span>
          </div>
        </div>
        <div className="mileston-content">
          <div className="mileston-icon">
            <img src={ExpSvg1} alt="Experience CSVG" className="svg_1"/>
            <span className="text_2"> 200+ </span><span className="text_2">TripAdvisor Review</span>  
          </div>
        </div>
        <div className="mileston-content">
          <div className="mileston-icon">
            <img src={ExpSvg2} alt="Experience CSVG" className="svg_1"/>
            <span className="text_2"> Best Price </span><span className="text_2">Garunteed</span>
          </div>
        </div>
        <div className="mileston-content">
          <div className="mileston-icon">
            <img src={ExpSvg3} alt="Experience CSVG" className="svg_1"/>
            <span className="text_2"> Commited To </span><span className="text_2">Sustainability</span>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default HeroSection;
