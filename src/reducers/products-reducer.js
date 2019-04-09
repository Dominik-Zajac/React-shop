import { 
  GET_PRODUCTS, 
  GET_PRODUCT, 
  SEARCH_PRODUCTS, 
  SORT_BY_NAME, 
  SORT_BY_PRICE
} from '../actions/actions-products';
import { 
  ADD_TO_BASKET, 
  REMOVE_PRODUCT, 
  PIECE_ADD, 
  PIECE_REMOVE 
} from '../actions/actions-basket';
import productsData from '../data/products.json';

const initialState = {
    products: productsData,
    selectedProduct: {},
    visibleProducts: [],
    direction: {
        name: 'asc',
        price: 'asc'
    },
    pieceCounter: 0,
    sumPrice: 0,
    carts: [],
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
            const carts = [...state.carts, basket];
            
            if(state.carts.find(cart => cart.id === action.id)) {
                const addToBasketProduct = state.products.find(product => product.id === action.id);
                const counterAddToBasket = ++addToBasketProduct.count;
                const productPrice = parseFloat(addToBasketProduct.price);
                
                return Object.assign({}, state, {
                    pieceCounter: ++state.pieceCounter,
                    sumPrice: state.sumPrice + productPrice
                });
            } else {
                const addToBasketCart = state.products.find(product => product.id === action.id);
                const cartPrice = parseFloat(addToBasketCart.price);

                return Object.assign({}, state, {
                    carts, 
                    sumPrice: state.sumPrice + cartPrice, 
                    pieceCounter: ++state.pieceCounter
                });
            }

        case REMOVE_PRODUCT:
            const removeCart = state.carts.filter(product => product.id !== action.id);
            const removeCartProduct = state.products.find(product => product.id === action.id);
            const counterRemoveProduct = parseFloat(removeCartProduct.count);
            console.log(counterRemoveProduct)
            const priceRemoveProduct = parseFloat(removeCartProduct.price);
            
            return Object.assign({}, state, {
                carts: removeCart,
                sumPrice: state.sumPrice - priceRemoveProduct,
                pieceCounter: state.pieceCounter - counterRemoveProduct,
                counterRemoveProduct: 1
            });

        case PIECE_ADD:
            const pieceAdd = state.products.find(product => product.id === action.id);
            const counterPieceAdd = ++pieceAdd.count 
            const pricePieceAdd = parseFloat(pieceAdd.price);

            return Object.assign({}, state, {
                pieceCounter: ++state.pieceCounter, 
                sumPrice: state.sumPrice + pricePieceAdd
            });

        case PIECE_REMOVE:
            const pieceRemove = state.products.find(product => product.id === action.id);
            const counterPieceRemove = --pieceRemove.count;
            const pricePieceRemove = parseFloat(pieceRemove.price);
            
            return Object.assign({}, state, {
                pieceCounter: --state.pieceCounter, 
                sumPrice: state.sumPrice - pricePieceRemove
            })
        }

    return state;
};

export default productsReducer;