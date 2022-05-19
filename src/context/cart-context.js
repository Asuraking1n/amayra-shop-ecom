import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
const cartContext = createContext()


const CartContextProvider = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([])
    
    const location = useLocation()
    const token = localStorage.getItem("token");


    useEffect(() => {

        (async () => {
            const res = await axios.get("/api/user/cart", {
                headers: { authorization: token },
            });
            setCartProduct(res.data.cart);
        })();

    }, [location, token])
    return (
        <>
            <cartContext.Provider value={{ cartProduct, setCartProduct }}>
                {children}
            </cartContext.Provider>
        </>
    )
}

const useCart = () => useContext(cartContext)
export { CartContextProvider, useCart }