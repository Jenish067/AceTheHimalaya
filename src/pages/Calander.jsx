import React from 'react'
import "../styles/Calander.css"
import logo from "../assets/images/logo.png"

const Calander = () => {
  return (
    <>

    {/* Navbar Logo And Hamburger Menu Starts */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark main_navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt='logo' className='logo'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
    {/* Navbar Logo and Hamburger Menu Ends */}

    {/* Navbar Menu Starts */}
          <div className="collapse navbar-collapse navbar_menu" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nepal
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li><a className="dropdown-item" href="/">Trekking in Nepal</a></li>
                  <li><a className="dropdown-item" href="/">Climbing and Expedition</a></li>
                  <li><a className="dropdown-item" href="/">Cultural Tour and Sightseeing</a></li>
                  <li><a className="dropdown-item" href="/">Cycling and Mountain Biking</a></li>
                  <li><a className="dropdown-item" href="/">Luxury Treks</a></li>
                  <li><a className="dropdown-item" href="/">Luxury Tours</a></li>
                  <li><a className="dropdown-item" href="/">Day Trips</a></li>
                  <li><a className="dropdown-item" href="/">Multi Country Tours</a></li>
                  <li><a className="dropdown-item" href="/">Voluntourism Trips</a></li>
                  <li><a className="dropdown-item" href="/">Cultural Tour and Sightseeing</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li>
                <button type='button'>
                  <a href='/' className='navbar_link'>
                    Top 10 Treks
                  </a>
                </button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <hr/>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <hr/>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                  <hr/>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                  <hr/>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          </div>
      </nav>
    </>
  )
}

export default Calander
