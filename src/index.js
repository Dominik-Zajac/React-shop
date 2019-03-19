import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import { MainLayout } from './components/MainLayout';
import { Home } from './components/Home';
import { Faq } from './components/Faq';
import { Regulamin } from './components/Regulamin';
import { Kontakt } from './components/Kontakt';
import { NotFound } from './components/NotFound';
import ProductContainer from './components/ProductContainer';
import ProductDetailsContainer from './components/ProductDetailsContainer';

render (
	<Provider store={ store }>
		<BrowserRouter>
			<MainLayout>
				<Switch>
					<Route exact path={ '/'} />
					<Route path={ '/products' } component={ ProductContainer } />
					<Route path={'/product/:id'} component={ProductDetailsContainer} />
					<Route exact path={ '/faq' } component={ Faq } />
					<Route exact path={ '/regulamin' } component={ Regulamin } />				
					<Route exact path={ '/kontakt' } component={ Kontakt } />				
				
					<Route component={ NotFound } />
				</Switch>
			</MainLayout>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

