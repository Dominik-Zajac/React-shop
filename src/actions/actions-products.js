export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SET_MARK = 'SET_MARK'

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

export function setMark(name) {
	return {
		type: SET_MARK,
		name
	}
}