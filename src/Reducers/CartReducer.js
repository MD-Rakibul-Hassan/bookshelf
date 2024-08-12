
export const initalState = {
    cartData: [],
    bookMarked :[],
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.payload]
            };
        case "REMOVE_FORM_CART":
            
            return {
                ...state,
                cartData:state.cartData.filter(cart => cart.id !== action.payload.id)
            }
        case "TOGGLE_BOOKMARK":
            const bookIndex = state.bookMarked.findIndex(book => book.id === action.payload.id);
            if (bookIndex === -1) {
                return {
                    ...state,
                    bookMarked:[...state.bookMarked, action.payload]
                }
            } else {
                const updatedBookMark = [...state.bookMarked];
                updatedBookMark.splice(bookIndex,1)
                return {
                    ...state,
                    bookMarked:updatedBookMark
                }
            }
        default:
            return state;
    }
}