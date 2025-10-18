import React from 'react'
import Login from './Login'
import './home.css'

const Homepage = () => {
  return(
    <div className='homepage-container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm px-5 py-3'>
        <a className='navbar-brand fs-3 fw-bold text-primary' href="/">
          Care Point
        </a>
        <button className='navbar-toggler' type="button" 
        data-bs-toggle = "collapse" data-bs-target="#navbarNav">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
          <ul className='navbar-nav gap-4'>
            <li className='nav-item'>
              <a className='nav-link' href="#about">About</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#about">Contact</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#about">Help</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='container-fluid hero-section d-flex align-items-center py-5'>
        <div className='row w-100'>
          <div className='col-md-6 d-flex flex-column justify-content-center pax-5'>
            <h1 className='display-5 fw-bold mb-4 text-primary'>
              Connecting Doctors & Patients Seamlessly
            </h1>
            <p className='lead text-secondary mb-4'>
              CarePoint helps you manage your healthcare with ease — book appointments,
              consult doctors, and store medical records securely, all in one place.
            </p>
            <button className='btn btn-primary btn-lg w-50'>Learn More</button>
          </div>

          <div className="col-lg-4 col-md-3 col-sm-10 d-flex justify-content-center">
            <div className="card shadow p-3 border-0 login-card-small">
              <Login />
              <p className="text-center mt-2 mb-0 small">
                New user? <a href="/signup" className="text-primary text-decoration-none">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className='bg-light text-center py-3 mt-auto border-top'>
        <p className='mb-0 text-secondary'>© 2025 CarePoint. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Homepage;