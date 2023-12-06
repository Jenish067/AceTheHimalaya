import React from 'react'
import Navbar from "../components/Navbar"
import '../styles/TrekImages.css'
import TrekIMg1 from '../assets/images/trekimage1.jpg'
import TrekIMg2 from '../assets/images/trekimage2.jpg'
import TrekIMg3 from '../assets/images/trekimage3.jpg'
import TrekIMg4 from '../assets/images/trekimage4.jpg'
import TrekIMg5 from '../assets/images/trekimage5.jpg'  

function TrekImages() {
  return (
    <>
      <Navbar/>
      <div className='main-container d-flex flex-row'>

        <div className="card card_styling">
        <a href="/">
          <img src={TrekIMg1} class="card-img-top" alt="..."/>
        </a>
        </div>
      

        <div class="d-flex flex-column">
          <div className="card card_styling_secondary">
          <a href="/">
          <img src={TrekIMg2} class="card-img-top img_column" alt="..."/>
          </a>
          </div>
          <div className="card card_styling_secondary">
          <a href="/">
            <img src={TrekIMg3} class="card-img-top img_column" alt="..."/>
          </a>
          </div>
        </div>

        <div class="d-flex flex-column">
          <div className="card card_styling_secondary">
          <a href="/">
            <img src={TrekIMg4} class="card-img-top img_column" alt="..."/>
          </a>
          </div>
          <div className="card card_styling_secondary">
          <a href="/">
            <img src={TrekIMg5} class="card-img-top img_column" alt="..."/>
          </a>
          </div>
        </div>
    </div>
    </>
  )
}

export default TrekImages;
