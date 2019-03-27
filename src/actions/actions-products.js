export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';

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

export function sortProducts(name) {
	return {
		type: SORT_PRODUCTS,
		name
	}
}