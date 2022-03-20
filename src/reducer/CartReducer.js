
const AddToCart =(products) => {
    
    if(JSON.parse(localStorage.getItem('cartData')) ===null){
        localStorage.setItem('cartData',JSON.stringify([products]))
        
    }else{
        let cartData = JSON.parse(localStorage.getItem('cartData'))
        cartData.push(products)
        localStorage.setItem('cartData',JSON.stringify(cartData))
        
    }
}
const CartReducer=(state,action)=>{
    
    switch(action.type){
        case 'ADD_TO_CART':
            return AddToCart(action.payload) || {...state,cart:JSON.parse(localStorage.getItem('cartData'))}
        default:
            return state
    }
}
export {CartReducer}