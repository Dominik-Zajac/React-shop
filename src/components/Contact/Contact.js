import React from 'react';
import ContactDetails from './ContactDetails'
import Localization from './Localization';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='row'>
                <ContactDetails />
                <Localization />
            </div>
        </div>
    )
}

export default Contact;