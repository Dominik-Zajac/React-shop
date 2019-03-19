import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from './components/Header/Header'
import { Home } from './components/Home/Home';
import { Faq } from './components/Faq/Faq';
import { Regulamin } from './components/Regulamin/Regulamin';
import { Kontakt } from './components/Kontakt/Kontakt';
import { NotFound } from './components/Notfound/NotFound';
import ProductContainer from './components/ProductContainer';
import ProductDetailsContainer from './components/ProductDetailsContainer';

export default (
	<Route exact path='/' component={ Header }>
		<IndexRoute component={ Home } />
		<Route path='/home' component={ Home } />
		<Route path='products'>
			<IndexRoute component={ ProductContainer } />
			<Route path='product/:id' component={ ProductDetailsContainer } />
		</Route>
		<Route path='faq' component={ Faq } />
		<Route path='regulamin' component={ Regulamin } />
		<Route path='kontakt' component={ Kontakt } />
		<Route path='*' component={ NotFound} />
	</Route>
);