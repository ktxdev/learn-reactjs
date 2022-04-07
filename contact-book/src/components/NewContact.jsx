import React from 'react'
import { createPortal } from 'react-dom'

const NewContact = ({contactDetails, setContactDetails, onCancel, onSave}) => {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContactDetails({...contactDetails, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave();
    }

    return createPortal(
        <div className='new-contact'>
            <form className='new-contact--form'>
                <h3>Contact Details</h3>
                <div className='divider' />
                <input onChange={handleChange} value={contactDetails.photoUrl} name='photoUrl' type="url" placeholder='Photo URL' />
                <input onChange={handleChange} value={contactDetails.name} name='name' type="text" placeholder='Name' />
                <input onChange={handleChange} value={contactDetails.phone} name='phone' type="tel" placeholder='Phone' />
                <input onChange={handleChange} value={contactDetails.email} name='email' type="email" placeholder='Email' />
                <div className='divider' />
                <div className='new-contact--form-btns'>
                    <input onClick={onCancel} type="button" value="Cancel" />
                    <input onClick={handleSubmit} type="submit" value="Save" />
                </div>
            </form>
        </div>,
        document.getElementById("modal"))
}

export default NewContact