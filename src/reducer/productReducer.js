const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, products: action.payload }
        default:
            return state
    }
}
export {ProductReducer}