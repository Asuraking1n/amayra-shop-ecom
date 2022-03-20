import { createContext, useReducer,  useContext } from "react";
import { CartReducer } from "../reducer/CartReducer";
const cartContext = createContext()



const CartContextProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(CartReducer, {cart:[] })
    return (
        <>
            <cartContext.Provider value={{cartState, cartDispatch}}>
                {children}
            </cartContext.Provider>
        </>
    )
}

const useCart = () => useContext(cartContext)
export { CartContextProvider, useCart }