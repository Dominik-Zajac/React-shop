export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

export function getProducts() {
    return {
    type: GET_PRODUCTS
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function searchProducts(searchText) {
    return {
        type: SEARCH_PRODUCTS,
        searchText
    }
}

export function sortByName(key, direct) {
    return {
        type: SORT_BY_NAME,
        key,
        direct
    }
}

export function sortByPrice(key, direct) {
    return {
        type: SORT_BY_PRICE,
        key,
        direct
    }
}

export function sortProducts(key, direct) {
    if(key === 'price') {
        return sortByPrice(key, direct);
    }   return sortByName(key, direct);
}
