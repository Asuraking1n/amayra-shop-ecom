
const AddToWishlist =(products) => {
    
    if(JSON.parse(localStorage.getItem('wishlistData')) ===null){
        localStorage.setItem('wishlistData',JSON.stringify([products]))
        
    }else{
        let wishlistData = JSON.parse(localStorage.getItem('wishlistData'))
        wishlistData.push(products)
        localStorage.setItem('wishlistData',JSON.stringify(wishlistData))
        
    }
}
const WishlistReducer=(state,action)=>{
    
    switch(action.type){
        case 'ADD_TO_WISHLIST':
            return AddToWishlist(action.payload) || {...state,wishlist:JSON.parse(localStorage.getItem('wishlistData'))}
        default:
            return state
    }
}
export {WishlistReducer}