import { createContext, useReducer,  useContext } from "react";
import { WishlistReducer } from "../reducer/WishlistReducer";
const wishlistContext = createContext()



const WishlistContextProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {wishlist:[] })
    return (
        <>
            <wishlistContext.Provider value={{wishlistState, wishlistDispatch}}>
                {children}
            </wishlistContext.Provider>
        </>
    )
}

const useWishlist = () => useContext(wishlistContext)
export { WishlistContextProvider, useWishlist }