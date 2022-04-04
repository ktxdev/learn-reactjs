import React from 'react'
import starIcon from '../images/star.png'

const Card = () => {
  return (
    <div className='card'> 
        <img className='card--image' src="https://images.unsplash.com/photo-1531159243698-b48e4c40c228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Image" />
        <div className='card--stats'>
            <img className='card--star' src={starIcon} alt="Star Icon" />
            <span>5.0</span>
            <span className='gray'>(6) </span>
            <span className='gray'>USA</span>
        </div>
        <p className='card--text'>Life lessons with Katie</p>
        <p className='card--text'><span className='bold'>From $145</span> / person</p>
    </div>
  )
}

export default Card