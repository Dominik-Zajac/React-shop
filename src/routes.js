import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import Regulations from './components/Regulations/Regulations';
import Contact from './components/Contact/Contact';
import Basket from './components/Basket/BasketContainer';
import BasketSummary from './components/Basket/BasketSummary/BasketSummary';
import NotFound from './components/Notfound/NotFound';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import ProductDetailsContainer from './components/ProductDetails/ProductDetailsContainer';

export default (
    <Route exact path='/' component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path='/home' component={Home} />
        <Route path='products'>
            <IndexRoute component={ProductsContainer} />
            <Route path=':id' component={ProductDetailsContainer} />
        </Route>
        <Route path='faq' component={Faq} />
        <Route path='regulations' component={Regulations} />
        <Route path='contact' component={Contact} />
        <Route path='basket'>
            <IndexRoute component={Basket} />
            <Route path='summary' component={BasketSummary} />
        </Route>
        <Route path='*' component={NotFound} />
    </Route>
)