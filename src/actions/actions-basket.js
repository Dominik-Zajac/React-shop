export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const PIECE_ADD = 'PIECE_ADD';
export const PIECE_REMOVE = 'PIECE_REMOVE';

export function addToBasket(id) {
    return {
        type: ADD_TO_BASKET,
        id
    }
}

export function deleteProduct(id) {
	return {
		type: REMOVE_PRODUCT,
		id
	}
}

export function pieceAdd(id) {
	return {
		type: PIECE_ADD,
		id
	}
}

export function pieceRemove(id) {
	return {
		type: PIECE_REMOVE,
		id
	}
}