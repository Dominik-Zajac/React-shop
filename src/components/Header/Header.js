import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export const Header = props => {
	return (
		<div>
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<NavLink className='navbar-brand' exact to='/'>
							Logo
						</NavLink>
					</div>
					<div className='collapse navbar-collapse'>
						<ul className='nav navbar-nav'>
							<li><NavLink exact to='/' activeClassName='active'>
								Home
							</NavLink></li>
							<li><NavLink exact to='/products' activeClassName='active'>
								Products
							</NavLink></li>
							<li><NavLink exact to='/faq' activeClassName='active'>
								FAQ
							</NavLink></li>
							<li><NavLink exact to='/regulamin' activeClassName='active'>
								Regulamin
							</NavLink></li>
							<li><NavLink exact to='/kontakt' activeClassName='active'>
								Kontakt
							</NavLink></li>
							<li><NavLink exact to='/koszyk' activeClassName='active'>
								Koszyk
							</NavLink></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container-fluid'>
				{ props.children }
			</div>
		</div>
	);
};

export default Header;