import React from 'react'
import logo from '../images/airbnb-logo.svg';

const Navbar = () => {
  return (
      <nav>
          <img src={logo} alt="AirBnb Logo" className='nav--logo' />
      </nav>
  )
}

export default Navbar