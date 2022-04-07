import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <img className='contact--photo' src="https://avatars.githubusercontent.com/u/64103955?v=4" alt="Contact Image" />
        <h2 className='contact--name'>Sean Huvaya</h2>
        <h4 className='contact--phone'>+263773806130</h4>
        <h4 className='contact--email'>sean.ktxdev@gmail.com</h4>
        <div className='contact--btns'>
            <button className='contact--btn contact--edit'>Edit</button>
            <button className='contact--btn'>Delete</button>
        </div>
    </div>
  )
}

export default Contact