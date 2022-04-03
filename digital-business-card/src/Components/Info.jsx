import { Email, LinkedIn } from '@mui/icons-material'
import React from 'react'
import profile from '../Assets/profile.jpg'

const Info = () => {
  return (
    <div className='info'>
        <img className='info--photo' src={profile} alt="Sean Huvaya" />
        <h2 className='info--name'>Sean P. T Huvaya</h2>
        <h4 className='info--profession'>Full-stack Software Engineer</h4>
        <a className='info--website' href='https://www.ktxdev.com' target="_blank">ktxdev.com</a>
        <div className='info--btns'>
            <button className='info--btn info--btn-email'>
                <Email />
                Email
            </button>
            <button className='info--btn info--btn-linkedin'>
                <LinkedIn />
                LinkedIn
            </button>
        </div>
    </div>
  )
}

export default Info