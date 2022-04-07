import React from 'react'
import { createPortal } from 'react-dom'

const NewContact = () => {
    return createPortal(
        <div className='new-contact'>
            <form className='new-contact--form'>
                <h3>Contact Details</h3>
                <div className='divider' />
                <input type="url" placeholder='Photo URL' />
                <input type="text" placeholder='Name' />
                <input type="tel" placeholder='Phone' />
                <input type="email" placeholder='Email' />
                <div className='divider' />
                <div className='new-contact--form-btns'>
                    <input type="button" value="Cancel" />
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>,
        document.getElementById("modal"))
}

export default NewContact