import axios from "axios";
import { ProductReducer } from "../reducer/productReducer";
import { createContext, useReducer, useEffect, useContext } from "react";

const productContext = createContext()



const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, { products: [] })
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/products')
            dispatch({ type: 'FETCH_DATA', payload: response.data.products })

        } catch (e) {
            alert(e)
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