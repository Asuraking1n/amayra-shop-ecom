import React, { useState, useReducer } from "react";
import RatedCard from "../cards/ratedCard/RatedCard";
import Insta from "../instagram/Insta";
import Footer from "../footer/Footer";
import "./productlisting.css";
import { useProduct } from "../../context/product-context";

const filterData = (arr, type) => {
    switch (type) {
        case 'SHOES':
            return [...arr].filter((val) => val.categoryName === 'shoe')
        case 'CLOTHING':
            return [...arr].filter((val) => val.categoryName === 'men' || val.categoryName === 'women')
        case 'ALL':
            return [...arr]
        case 'MEN':
            return [...arr].filter((val) => val.categoryName === 'men')
        case 'WOMEN':
            return [...arr].filter((val) => val.categoryName === 'women')
        case 'L':
            return [...arr].filter((val) => val.size === 'L')
        case 'M':
            return [...arr].filter((val) => val.size === 'M')
        case 'S':
            return [...arr].filter((val) => val.size === 'S')
        case 'US10':
            return [...arr].filter((val) => val.size === 'US10')
        case 'US9':
            return [...arr].filter((val) => val.size === 'US9')
        case 'US8':
            return [...arr].filter((val) => val.size === 'US8')
        case 'US7':
            return [...arr].filter((val) => val.size === 'US7')
        case 'US6':
            return [...arr].filter((val) => val.size === 'US6')
        default:
            return [...arr]
    }
}



const ProductiListing = () => {
    const [isfilter, setIsfilter] = useState("");
    const { products } = useProduct()
    const [state, dispatch] = useReducer(function filterReduce(state, action) {
        switch (action.type) {
            case 'SORT':
                return { ...state, filterStore: filterData([...products], action.payload) }
            default:
                return state
        }
    }, { filterStore: [] })
    console.log('Length' + state.filterStore.length)
    return (
        <>

            <div className="productlist-sec">
                <div className="product-header-cont">
                    <div className="product-header-heading">Amayra's Shop</div>
                    <div className="shop-header-category">
                        <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'ALL' }) }}>all</div>
                        <span>/</span>
                        <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'ALL' }) }}>ACCESSORIES</div>
                        <span>/</span>
                        <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'CLOTHING' }) }}>clothing</div>
                        <span>/</span>
                        <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'SHOES' }) }}>shoes</div>
                    </div>
                </div>

                <div className="product-body-sec">
                    <div className={`product-body-filter-sec ${isfilter}`}>
                        <div className="product-cat">
                            <div className="product-cat-item product-cancel">
                                Accessories
                                <img
                                    src="images/cancel.png"
                                    alt="cancel"
                                    className="closeFilter"
                                    onClick={() => setIsfilter("")}
                                />
                            </div>
                            <div className="product-cat-item">
                                Clothing
                                <div className="product-cat-sub-item" onClick={() => { dispatch({ type: 'SORT', payload: 'MEN' }) }}>
                                    <span>-</span>
                                    Men's Jackets
                                </div>
                                <div className="product-cat-sub-item" onClick={() => { dispatch({ type: 'SORT', payload: 'MEN' }) }}>
                                    <span>-</span>
                                    Men's Shirts
                                </div>
                                <div className="product-cat-sub-item" onClick={() => { dispatch({ type: 'SORT', payload: 'WOMEN' }) }}>
                                    <span>-</span>
                                    Women's Dresses
                                </div>
                                <div className="product-cat-sub-item" onClick={() => { dispatch({ type: 'SORT', payload: 'WOMEN' }) }}>
                                    <span>-</span>
                                    Women's Jackets
                                </div>
                            </div>
                            <div className="product-cat-item">Shoes</div>
                        </div>
                        <div className="size-filterr-cont">
                            <div className="f-heading">FILTER BY SIZE</div>
                            <div className="size-cont">
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'L' }) }}>l</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'M' }) }}>m</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'S' }) }}>s</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'US10' }) }}>us 10</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'US6' }) }}>us 6</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'US7' }) }}>us 7</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'US8' }) }}>us 8</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'US9' }) }}>us 9</span>
                            </div>
                        </div>
                        <div className="product-filterr-cont">
                            <div className="f-heading">product tags</div>
                            <div className="tag-cont">
                                <span>996</span>
                                <span>london</span>
                                <span>winter</span>
                                <span>adidas</span>
                                <span>shirt</span>
                                <span>shoe</span>
                                <span>jackets</span>
                                <span>men</span>
                                <span>top</span>
                                <span>women</span>
                                <span>suite</span>
                                <span>brand</span>
                                <span>cap</span>
                                <span>green</span>
                                <span>black</span>
                                <span>training</span>
                                <span>exercise</span>
                                <span>scarf</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-body-card-sec">
                        <div className="product-cat-item">
                            <span>
                                Showing {state.filterStore.length>0?state.filterStore.length:products.length} results
                                <img
                                    src="images/filter.png"
                                    alt="filter"
                                    className="filter-img"
                                    onClick={() => setIsfilter("filter-active")}
                                />
                            </span>
                            <div className="product-card-cont">
                                {state.filterStore.length > 0 ?
                                    state.filterStore.map((val, index) => {
                                        return (
                                            <div key={index}>
                                                <RatedCard imgSrcTwo={val.imgTwo} imgSrcOne={val.imgOne} stock={val.stock} name={val.title} type={val.type} price={val.price}/>
                                            </div>
                                        )
                                    }) :
                                    products.map((val, index) => {
                                        return (
                                            <div key={index}>
                                                <RatedCard imgSrcTwo={val.imgTwo} imgSrcOne={val.imgOne} stock={val.stock} name={val.title} type={val.type}  price={val.price}/>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <Insta />
                <Footer />
            </div>
        </>
    );
};

export default ProductiListing;
