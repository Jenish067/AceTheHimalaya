import React from 'react'
// import Calander from "../pages/Calander"
import '../styles/TrekInfo.css'
import personImg from '../assets/images/logo.png'
import country from '../assets/svg//earth.svg'
import time from '../assets/svg/dates.svg'
import difficulty from '../assets/svg/difficulty.svg'
import activity from '../assets/svg/running.svg'
import maxAltitude from '../assets/svg/mountain.svg'
import season from '../assets/svg/weather.svg'
import Accomo from '../assets/svg/hotel.svg'
import food from '../assets/svg/food.svg'
import destination from '../assets/svg/trip.svg'


function TrekInfo() {
  return (
    <>
    <div className='main_info d-flex flex-row'>
      <div className='upper_info p-2'>
        <h1 className='upper_text'>
          Everest Panorama Trek - 9 Days
        </h1>
        <p>
          <a href='https://www.tripadvisor.com/Attraction_Review-g293890-d1957215-Reviews-Ace_the_Himalaya-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html' target="_blank" rel="noopener noreferrer">
          2011 reviews in TripAdvisor
          </a>
          &nbsp;
          &nbsp;
          Recommended by 99% of travelers
        </p>
        <p>
          In this short and less and strenuous trek, walk in the foothills of Mt. Everest and experience the amazing views of the giant mountain surrounding the region.
        </p>

        <div class="card card-items" >
          <div class="card-body d-flex flex-row">
            <div className="mileston-content">
            <div className="mileston-icon">
              <img src={country} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Country </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">Nepal</span>
            </div>
          </div>
          <div className="mileston-content">
            <div className="mileston-icon">
              <img src={time} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Duration </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">9 days</span>
            </div>
          </div>
          <div className="mileston-content">
            <div className="mileston-icon">
              <img src={difficulty} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Difficulty </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">Demanding</span>
            </div>
          </div>
          </div>
          <div class="card-body d-flex flex-row">
            <div className="mileston-content">
            <div className="mileston-icon">
              <img src={activity} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Activity </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">Trekking/Hiking</span>
            </div>
          </div>
          <div className="mileston-content">
            <div className="mileston-icon">
              <img src={maxAltitude} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Max Altitude </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">3,860m/12,664ft</span>
            </div>
          </div>
          <div className="mileston-content">
            <div className="mileston-icon">
              <img src={season} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Best Season </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">Jan-Jul/Sep-Dec</span>
            </div>
          </div>
          </div>
          <div class="card-body d-flex flex-row">
            <div className="mileston-content">
            <div className="mileston-icon">
              <img src={Accomo} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Accomodation </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">Tea House & Hotels</span>
            </div>
          </div>
          <div className="mileston-content">
            <div className="mileston-icon">
              <img src={food} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Meal</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">Included</span>
            </div>
          </div>
          <div className="mileston-content">
            <div className="mileston-icon">
              <img src={destination} alt="Experience CSVG" className="svg"/>
              <span className="text_2"> Start/End Point </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text_3">Nepal</span>
            </div>
          </div>
          </div>

        </div>
      </div>
    
     {/* Form with BUtton  */}
     <div className='form_main_category'>
      <div className='d-flex flex-column'>
        <div className='main_form'>
          <div class="card card_form_main">
            <div class="card-body">
              <h1 className='text_form'>
                USD 1,400
                <p className='text_small'>
                /person
                </p>
              </h1>
              <div>
                <button type="button" class="btn btn-primary div_button">Book Now</button>
              </div>
              <div>
                <button type="button" class="btn btn-outline-primary div_button">Inquire Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='main_form_1'>
          <div className="card card_form_main1">
            <div className ="card-body">
              <h1 className='text_form'>
                Speak To Expert
              </h1>
              <div >
                <img src={personImg}  alt='img' className='image_form'/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Form With Button Ends */}
    </div>


    <div class="card trek_details">
        <div class="card-body">
          <h3 class="card-title">Trip Highlights</h3>
          <ul>
            <li>
              Scenic mountain flight to and from Lukla.
            </li>
            <li>
              Experience Sherpa culture and life style of mountain people in the heart of Himalaya.
            </li>
            <li>
              Visit Tengboche Monastery.
            </li>
            <li>
              Amazing views of Himalaya including Mt. Everest, Lhotse, Mt. Thamserku, Mt. Amadablam and many other peaks.
            </li>   
          </ul>
        </div>
      </div>

      <div class="card trek_details">
        <div class="card-body">
          <h3 class="card-title">Trip Overview</h3>
          <p>
            Everest Panorama Trek is a less strenuous trek in the foothills of <a href='https://en.wikipedia.org/wiki/Mount_Everest' target="_blank" rel="noopener noreferrer">Mount Everest</a> region that starts with a 35-minutes flight from Kathmandu to Lukla’s tiny airstrip in the month of (Jan, Feb, Jun, Jul, Sep, and Dec) or 5 to 6 hours drive to Manthali/Ramechhap and 20 minutes flight in the month of (Mar, Apr, May, Oct, and Nov). This trekking follows the trail to Tengboche Monastery (3,860 m) via Lukla and Namche Bazaar.
          </p>
          <p>
          It is a short trek giving you a really superb view of the world’s highest snow-capped peaks, including Mt. Everest, Mt. Lhotse, Mt. Thamserku, and <a href='https://www.acethehimalaya.com/10-photos-ama-dablam-might-seen/ target="_blank" rel="noopener noreferrer"'>Mt. Amadablam.</a>  Visiting a succession of Sherpa villages, surrounded by fluttering prayer flags and glistening snow-capped peaks, the popular myth of ‘Shangri La’ will seem all too real.
          </p>
          <p>
          This trek definitely gives a great introduction to the Sherpa lifestyle and country culture along with beautiful mountain views. For first-time trekkers to Nepal, this trek is one of the most popular destinations. Moreover, the Everest panorama trek is suited for those people who haven’t had enough time for a longer trek into the high mountains.
          </p>
        </div>
      </div>
      <div class="card trek_details">
        <div class="card-body">
          <h3 class="card-title">Short Itinerary</h3>
          <ul>
            <li>
            Day 1:Arrival at Tribhuvan International Airport in Kathmandu (1,400 m) and transfer to hotel.
            </li>
            <hr/>
            <li>
            Day 2:Fly to Lukla (2,804 m) from Kathmandu – 35 minutes or drive to Manthali/Ramechhap – 5 to 6 hours and take – 20 minutes flight to Lukla, and then trek to Phakding (2,610 m) – 3 to 4 hours. Overnight at a guesthouse.
            </li>
            <hr/>
            <li>
            Day 3:Trek to Namche Bazaar (3,440 m) from Phakding – 5 to 6 hours. Overnight at a guesthouse.
            </li>
            <hr/>
            <li>
            Day 4:Acclimatization Day at Namche Bazaar. Hike to Hotel Everest View Hotel (3,880 m) and back. Overnight at a Guesthouse.
            </li>
            <hr/>
            <li>
            Day 5:Trek to Tengboche (3,860 m) – 5 to 6 hours. Overnight at a Guesthouse.
            </li>
            <hr/>
            <li>
            Day 6:Trek Back to Namche Bazaar (3,440 m) – 4 to 5 hrs. Overnight at a Guesthouse.
            </li>
            <hr/>
            <li>
            Day 7:Trek to Lukla (2,840 m) – 6 to 7 hrs. Overnight at a Guesthouse.
            </li>
            <hr/>
            <li>
            Day 8:Flight Back to Kathmandu or Manthali/Ramechhap and same-day 5 to 6 hours drive back to Kathmandu     from Lukla. Overnight at a hotel in Kathmandu.
            </li>
            <hr/>
            <li>
            Day 8:Transfer to the International Airport for Your Final Flight Departure.
            </li>
            <hr/>   
          </ul>
        </div>
      </div>


      <section id="cards" className="py-5 d-flex flex-row read_more">
      <div className="container">
        <div >
          <div>
            <div>
              <p className='readme'>Note</p>
              <p>
              Our standard itinerary might differ slightly due to unpredictable happenings and events out of our control. Factors such as flight cancellation/delay, unfavorable weather, natural calamities, newly implemented government rules, political affairs, trekkers’ health condition, etc., are possible. Evaluating
              </p>
              <div class="collapse mb-3" id="collapseWidthExample1">
              the situation’s possible solutions allow the trekking to resume as much as possible based on the best alternatives. In these times, we look for your cooperation and flexibility.

              It is advised you arrive a day before the trip start date so you can rest and it also gives you time to buy clothing equipment and gear required for the trek. Also, it is best if you book your international flights with spare days in Nepal before and after your trek in case of any flight delays or cancellations due to weather. Moreover, you have options to customize this trip where you can add on a sightseeing tour in Kathmandu, other adventure sports or day trips around the country before or after the trek.
              </div>
            </div>
            <div>
              <button class="btn button_read" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cards" className="py-5 read_more1">
      <div className="container">
        <div>
          <div>
            <div>
              <p className='readme'>Lukla Flight Information</p>
              <p>
              We would like to inform you regarding the Lukla flight details which may affect your itinerary. During peak seasons, (including March, April, May, October and November) the flight to Lukla will be operated from Ramechhap/Manthali due to air traffic expansion, which is about a 5 to 6-hour drive from
              </p>
              <div class="collapse mb-3" id="collapseWidthExample1">
              Kathmandu. Whereas, during nonpeak seasons, (including January, February, June, July, August, September and December) the flight is operated from Kathmandu.

              Please be aware that the decision regarding the operation of flights solely depends on the airline and is influenced by the volume of travelers during the specific month.

              Unpleasant weather conditions, congested traffic in the Airport, unmanaged runway, topographical difficulties, etc., are the significant reasons for Lukla flight delay/cancellation. Therefore, if you intend on trekking in the land of Everest region, arranging additional one or two days in your trip is highly preferable. This will help in case of flight delay/cancellation and thus board on the pre-planned international flight. 
              </div>
            </div>
            <div>
              <button class="btn button_read" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="card button_check " >
      <div class="card-body button_check_1">
        <h1>
        Departures & Availability
        </h1>
        <button type="button" class="btn btn-dark btn_access">Group Departure</button>
        <button type="button" class="btn btn-light btn_access">Private Trip</button>

        <p className='text_access'>
          Our groups are small with maximum 14 people. We create groups of independent travelers, friends and families which maintains close interpersonal connection, engage more and get into depth of the journey. Choose a date from the calendar to reserve your spot.
        </p>

      </div>
    </div>

    <div class="card card_date">
      <div class="card-body">
        <h5 class="card-title">Select Departure Date</h5>
        <h6 class="card-subtitle mb-2 text-muted">Trip Days: 9days</h6>
        {/* <Calander/> */}
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
          <h6 class="card-subtitle mb-2 text-muted">Sold out dates</h6>
          </label>
        </div>
        <div className='d-flex flex-row'>
          <h6 className="card-subtitle mb-2 text-muted p-2">Powered By WETRAVEL</h6>
          <a href='/'>
          <button type="button" className="btn btn-primary mb-2 btn_book">Book Now</button>
          </a>
        </div>
      </div>
    </div>


  </>
    
  )
}

export default TrekInfo
