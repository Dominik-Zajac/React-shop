import React from 'react';

/* Styles */
import './Kontakt.scss';

export const Kontakt = () => {
	return (
		<div className='contact-container'>
			<div className='contact-details'>
				<h1 className='contact-title'>Kontakt</h1>
				<hr className='line'/>
				<p className='contact-paragraph'>11-111 Krakow</p>
				<p className='contact-paragraph'>ul.Krakowska 1</p>
				<p className='contact-paragraph'>tel.111-111-111</p>
				<p className='contact-paragraph'>e-mail.biuro@narzedzia.pl</p>
			</div>
			<div className='localization'>
				<img src="https://www.google.com/maps/d/thumbnail?mid=14rBet9kAZ64pyLZLeEGxaycYURY" />
			</div>
		</div>
	);
};

export default Kontakt;