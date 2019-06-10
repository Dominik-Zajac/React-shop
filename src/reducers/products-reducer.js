import {
    GET_PRODUCTS,
    GET_PRODUCT,
    SEARCH_PRODUCTS,
    SORT_BY_NAME,
    SORT_BY_PRICE
} from '../actions/actions-products';
import productsData from '../data/products.json';

const initialState = {
    products: productsData,
    selectedProduct: {},
    visibleProducts: [],
    direction: {
        name: 'asc',
        price: 'asc'
    }
};

const productsReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, { products: state.products });

        case GET_PRODUCT:
            const selectedProduct = state.products.find(product => product.id == action.id);
            return Object.assign({}, state, { selectedProduct });

        case SEARCH_PRODUCTS:
            const foundProducts = state.products.filter(product => action.searchText.length > 1
                ? product.search.toLowerCase().includes(action.searchText.toLowerCase()) : state);
            return Object.assign({}, state, { visibleProducts: foundProducts });

        case SORT_BY_NAME:
            const sortName = state.products.sort((a, b) => {
                if (action.direct === "asc") {
                    let x = a[action.key];
                    let y = b[action.key];
                    return x < y ? -1 : x > y ? 1 : 0;
                } else {
                    let x = b[action.key];
                    let y = a[action.key];
                    return x < y ? -1 : x > y ? 1 : 0;
                }
            });
            return Object.assign({}, state, {
                visibleProducts: sortName,
                direction: {
                    [action.key]: action.direct,
                }
            });

        case SORT_BY_PRICE:
            const sortPrice = state.products.sort((a, b) => {
                if (action.direct === 'asc') {
                    return parseFloat(a[action.key]) - parseFloat(b[action.key]);
                } else {
                    return parseFloat(b[action.key]) - parseFloat(a[action.key]);
                }
            });
            return Object.assign({}, state, {
                visibleProducts: sortPrice,
                direction: {
                    [action.key]: action.direct,
                }
            });
    }

    return state;
};

export default productsReducer;