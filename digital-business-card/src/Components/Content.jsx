import React from 'react'

const Content = ({title, text}) => {
  return (
    <div className='about container'>
        <h2 className='content--title'>{title}</h2>
        <p className='content--text'>
            {text}
        </p>
    </div>
  )
}

export default Content