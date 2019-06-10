import {
    ADD_TO_BASKET,
    REMOVE_PRODUCT,
    PIECE_ADD,
    PIECE_REMOVE
} from '../actions/actions-basket';
import productsData from '../data/products.json';

const initialState = {
    products: productsData,
    pieceCounter: 0,
    sumPrice: 0,
    carts: [],
};

const basketReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            const basket = state.products.find(product => product.id === action.id);
            const carts = [...state.carts, basket];

            if (state.carts.find(cart => cart.id === action.id)) {
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
                const priceRemoveProduct = parseFloat(removeCartProduct.price) * counterRemoveProduct;

                return Object.assign({}, state, {
                    carts: removeCart,
                    sumPrice: state.sumPrice - priceRemoveProduct,
                    pieceCounter: state.pieceCounter - counterRemoveProduct,
                });

            case PIECE_ADD:
                const pieceAdd = state.products.find(product => product.id === action.id);
                const counterPieceAdd = ++pieceAdd.count;
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
                });
    }

    return state;
};

export default basketReducer;