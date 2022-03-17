import { FilterData } from "./FilterData"
import { useProduct } from "../context/product-context"
function FilterReduce(state, action) {
    const { products } = useProduct()
    switch (action.type) {
        case 'SORT':
            return { ...state, filterStore: FilterData([...products], action.payload) }
        default:
            return state
    }
}

export {FilterReduce}