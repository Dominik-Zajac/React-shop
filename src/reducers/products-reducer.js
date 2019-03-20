import { GET_PRODUCTS, GET_PRODUCT, SEARCH_PRODUCTS } from '../actions/actions-products';
import productsData from '../data/products.json';

const initialState = {
	products: productsData,
	selectedProduct: {},
	visibleProducts: []
};

const productsReducer = function (state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return Object.assign({}, state, {products: state.products})
		
		case GET_PRODUCT:
			const selectedProduct = state.products.find(product => product.id == action.id);
			return Object.assign({}, state, { selectedProduct });
			
		case SEARCH_PRODUCTS:
			const foundProducts = state.products.filter(product => product.search.toLowerCase().includes(action.searchText.toLowerCase()));
			return Object.assign({}, state, { visibleProducts: foundProducts });
	}

	return state;
};

export default productsReducer;