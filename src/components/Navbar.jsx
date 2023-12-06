import React from 'react'
import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className='navbar-brand' href='/'>
            <img src={logo} alt='Logo' className='logo'/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className='navbar_items'>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <button class="btn btn dropdown-toggle button_change" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Nepal
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <button class="btn btn dropdown-toggle button_change" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  International
                 </button>
                </a>  
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <button class="btn btn dropdown-toggle button_change" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Company
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <button type="button" class="btn button_major">Top 10 Treks</button>
                </a>
              </li>
            </ul>
          </div>
          <div className='button-nav-change'>
            <div class="dropdown">
              <button class="btn btn dropdown-toggle button_change" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Change Number
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
