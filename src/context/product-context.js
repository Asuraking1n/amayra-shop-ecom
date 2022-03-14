import axios from "axios";
import { createContext, useReducer, useEffect, useContext } from "react";

const productContext = createContext()







const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, products: action.payload }
        default:
            return state
    }
}








const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, { products: [] })
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/products')
            dispatch({ type: 'FETCH_DATA', payload: response.data.products })

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <productContext.Provider value={{
                products: state.products
            }}>
                {children}
            </productContext.Provider>
        </>
    )
}

const useProduct = () => useContext(productContext)
export { productContext, ProductContextProvider, useProduct }