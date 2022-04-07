import React from 'react'
import NewContact from './NewContact'

const Header = ({onNewContact}) => {
  return (
    <section className='header'>
        <h2 className='header--title'>Contact Book</h2>
        <button onClick={onNewContact} className='header--btn' >New Contact</button>
    </section>
  )
}

export default Header