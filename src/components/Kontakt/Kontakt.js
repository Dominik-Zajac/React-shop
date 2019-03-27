import React from 'react';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Kontakt.scss';

export const Kontakt = () => {
    return (
        <div className='contact-container'>
            <div className='row'>
                <div className='contact-details col-sm-12 col-lg-6'>
                    <h1 className='contact-title'>Kontakt</h1>
                    <hr className='line'/>
                    <p className='contact-paragraph'>11-111 Krakow</p>
                    <p className='contact-paragraph'>ul.Krakowska 1</p>
                    <p className='contact-paragraph'>tel.-111-111</p>
                    <p className='contact-paragraph'>e-mail.biuro@narzedzia.pl</p>
                </div>
                <div className='localization col-sm-12 col-lg-6'>
                    <img src='https://i.ibb.co/CPsBMxC/mapa.jpg' alt='Mapa'/>
                </div>
            </div>
        </div>
    );
};

