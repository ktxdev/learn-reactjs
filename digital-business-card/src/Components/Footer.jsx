import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <a className='footer--link' href="#">
            <Twitter className='footer--icon' />
        </a>
        <a className='footer--link' href="#">
            <Facebook className='footer--icon' />
        </a>
        <a className='footer--link' href="#">
            <Instagram className='footer--icon' />
        </a>
        <a className='footer--link' href="#">
            <GitHub className='footer--icon' />
        </a>
    </div>
  )
}

export default Footer