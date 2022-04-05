import React from 'react'
import starIcon from '../images/star.png'

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <div className='card'> 
        <img className='card--image' src={img} alt="Image" />
        <div className='card--stats'>
            <img className='card--star' src={starIcon} alt="Star Icon" />
            <span>{rating}</span>
            <span className='gray'>({reviewCount}) </span>
            <span className='gray'>{country}</span>
        </div>
        <p className='card--text'>{title}</p>
        <p className='card--text'><span className='bold'>From {`$${price}`}</span> / person</p>
    </div>
  )
}

export default Card