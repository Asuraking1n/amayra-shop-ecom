import { createContext, useContext, useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { useLocation } from "react-router-dom";
const wishlistContext = createContext()



const WishlistContextProvider = ({ children }) => {

    const [wishListProduct, setWishListProduct] = useState([])
    const location = useLocation()
    const token = localStorage.getItem("token");

    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/user/wishlist", {
                headers: { authorization: token },
            });
            setWishListProduct(res.data.wishlist);
        })();
    }, [location,token])
    return (
        <>
            <wishlistContext.Provider value={{ wishListProduct, setWishListProduct }}>
                {children}
            </wishlistContext.Provider>
        </>
    )
}

const useWishlist = () => useContext(wishlistContext)
export { WishlistContextProvider, useWishlist }