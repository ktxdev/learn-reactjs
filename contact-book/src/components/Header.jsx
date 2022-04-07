import React from 'react'
import NewContact from './NewContact'

const Header = () => {
  return (
    <section className='header'>
      <NewContact />
        <h2 className='header--title'>Contact Book</h2>
        <button className='header--btn' >New Contact</button>
    </section>
  )
}

export default Header