import React from 'react'

const Contact = ({ id, photoUrl, name, phone, email, onEdit}) => {

  return (
    <div className='contact'>
        <img className='contact--photo' src={photoUrl} alt="Contact Image" />
        <h2 className='contact--name'>{name}</h2>
        <h4 className='contact--phone'>{phone}</h4>
        <h4 className='contact--email'>{email}</h4>
        <div className='contact--btns'>
            <button onClick={() => onEdit(id)} className='contact--btn contact--edit'>Edit</button>
            <button className='contact--btn'>Delete</button>
        </div>
    </div>
  )
}

export default Contact