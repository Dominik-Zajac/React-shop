import React from 'react';
import FaqBox from './FaqBox';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Styles */
import '../../sass/animations.scss';
import './Faq.scss'; 

const Faq = () => (
    <ReactCSSTransitionGroup
        transitionName='fade'
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={2000}
        transitionAppear={true}
        transitionAppearTimeout={1500}
    >
        <FaqBox />
    </ReactCSSTransitionGroup>      
)

export default Faq;
