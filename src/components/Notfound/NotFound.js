import React from 'react';

/* Styles */
import './notfound.scss';

export class NotFound extends React.Component {
	render() {
		return (
			<div className='error-container'>
				<p className='first-paragraph'>Strona niedostepna</p>
				<p className='second-paragraph'>Niestety, podany przez ciebie adres strony nie jest dostepny</p>
			</div>
		)
	}
}