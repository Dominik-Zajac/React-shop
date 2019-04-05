import React from 'react';
import Paragraph from './FooterParagraph';
import Links from './FooterLink';

/* Styles */
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <Paragraph />
            <Links />
        </footer>
    )
}

export default Footer;