import { 
    GET_PRODUCTS, 
    GET_PRODUCT, 
    SEARCH_PRODUCTS, 
    SORT_BY_NAME, 
    SORT_BY_PRICE
} from '../actions/actions-products';
import { ADD_TO_BASKET, REMOVE_PRODUCT, PIECE_ADD, PIECE_REMOVE } from '../actions/actions-basket';
import productsData from '../data/products.json';

const initialState = {
    products: productsData,
    selectedProduct: {},
    visibleProducts: [],
    direction: {
        name: 'asc',
        price: 'asc'
    },
    pieceCounter: 1,
    cart: [{
  "name": "Pilarka tarczowa",
  "producent" : "DEWALT",
  "model": "DCS391",
  "condition": "nowy",
  "voltage": "18V",
  "power": "-",
  "price": "1119,00 zl",
  "search": "Pilarka tarczowa DEWALT",
  "imageUrl": "https://i.ibb.co/yYYTvcH/pilarka-dewalt-min.png",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "inMagazine": 12,
  "id": 19,
  "count": 0,
}, {
  "name": "Pilarka tarczowa",
  "producent" : "BOSCH",
  "model": "GKS 18V-Li",
  "condition": "nowy",
  "voltage": "18V",
  "power": "-",
  "price": "1029,99 zl",
  "search": "Pilarka tarczowa BOSCH",
  "imageUrl": "https://i.ibb.co/4V48z5Z/pilarka-bosch-min.png",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "inMagazine": 12,
  "id": 20,
  "count": 0,
}, {
  "name": "Pilarka tarczowa",
  "producent" : "MAKITA",
  "model": "DSS610Z",
  "condition": "nowy",
  "voltage": "18V",
  "power": "-",
  "price": "1199,99 zl",
  "search": "Pilarka tarczowa MAKITA",
  "imageUrl": "https://i.ibb.co/2s1NG0p/pilarka-makita-min.png",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "inMagazine": 12,
  "id": 21,
  "count" : 0,
}],
};

const productsReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {products: state.products})
                
        case GET_PRODUCT:
            const selectedProduct = state.products.find(product => product.id == action.id);
            return Object.assign({}, state, { selectedProduct });
            
        case SEARCH_PRODUCTS:
            const foundProducts = state.products.filter(product => action.searchText.length > 1 ? product.search.toLowerCase().includes(action.searchText.toLowerCase()) : state);
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

        case ADD_TO_BASKET:
            const basket = state.products.find(product => product.id === action.id);
            const cart = [...state.cart, basket]
            
            if(state.cart.find(product => product.id === action.id)) {
                return Object.assign({}, state, {pieceCounter: state.pieceCounter + 1})
            } else {
                return Object.assign({}, state, {cart})
            }

        case REMOVE_PRODUCT:
            const removeCart = state.cart.filter(product => product.id !== action.id);
            return Object.assign({}, state, { cart: removeCart })

        case PIECE_ADD:
            // const pieceCounter = state.cart.find(product => product.id === action.id);

            return Object.assign({}, state, {pieceCounter: state.pieceCounter + 1});

        case PIECE_REMOVE:
            return Object.assign({}, state, {pieceCounter: state.pieceCounter - 1})
    }

    return state;
};

export default productsReducer;