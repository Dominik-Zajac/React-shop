import React from 'react';
import { Link } from 'react-router';
import Footer from '../Footer/Footer';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

export const Header = props => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid'>
					<div className='nav-logo'>
						<Link className='navbar-brand' to='/'>
							Narzedzia
						</Link>
					</div>
					<div className='collapse navbar-collapse'>
						<ul className='navbar-nav'>
							<li className='nav-link'><Link to='/home' activeClassName='active'>
								Home
							</Link></li>
							<li className='nav-link'><Link to='/products' activeClassName='active'>
								Products
							</Link></li>
							<li className='nav-link'><Link to='/faq' activeClassName='active'>
								FAQ
							</Link></li>
							<li className='nav-link'><Link to='/regulamin' activeClassName='active'>
								Regulamin
							</Link></li>
							<li className='nav-link'><Link to='/kontakt' activeClassName='active'>
								Kontakt
							</Link></li>
							<li className='nav-link'><Link to='/koszyk' activeClassName='active'>
								<i className="fas fa-shopping-basket"></i>
							</Link></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container-fluid'>
				{ props.children }
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Header;