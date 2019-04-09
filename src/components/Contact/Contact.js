import React from 'react';
import ContactDetails from './ContactDetails'
import Localization from './Localization';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/animations.scss';
import './Contact.scss';

const Contact = () => {
    return (
        <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={2000}
            transitionAppear={true}
            transitionAppearTimeout={1500}
        >
            <div className='contact-container'>
                <div className='row'>
                    <ContactDetails />
                    <Localization />
                </div>
            </div>
        </ReactCSSTransitionGroup>
    )
}

export default Contact;