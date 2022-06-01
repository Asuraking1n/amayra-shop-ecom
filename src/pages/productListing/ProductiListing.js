import React, { useState, useReducer } from "react";
import RatedCard from "../../components/cards/ratedCard/RatedCard";
import Footer from '../../components/footer/Footer'
import Insta from '../../components/instagram/Insta'
import "./productlisting.css";
import { useProduct } from "../../context/product-context";
import { FilterReduce } from '../../reducer/FilterReducer'



const ProductiListing = () => {
    const [isfilter, setIsfilter] = useState("");
    const { products } = useProduct()
    const [state, dispatch] = useReducer(FilterReduce, { filterStore: [] })
    
    return (
        <>

            <div className="productlist-sec">
                <div className="product-header-cont">
                    <div className="product-header-heading">Amayra's Shop</div>
                    <div className="shop-header-category">
                        <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'ALL' }) }}>all</div>
                        <span>/</span>
                        <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'SHOES' }) }}>shoes</div>
                        <span>/</span>
                        <div className="category-item" onClick={() => { dispatch({ type: 'SORT', payload: 'CLOTHING' }) }}>clothing</div>
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
                                    Men's Shirts
                                </div>
                                <div className="product-cat-sub-item" onClick={() => { dispatch({ type: 'SORT', payload: 'WOMEN' }) }}>
                                    <span>-</span>
                                    Women's Dresses
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
                            </div>
                        </div>
                        <div className="size-filterr-cont">
                            <div className="f-heading">FILTER BY RATING</div>
                            <div className="size-cont">
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'size_1' }) }}>1</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'size_2' }) }}>2</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'size_3' }) }}>3</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'size_4' }) }}>4</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'size_5' }) }}>5</span>
                            </div>
                        </div>
                        <div className="size-filterr-cont">
                            <div className="f-heading">FILTER BY PRICE</div>
                            <div className="size-cont">
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' }) }}>HIGH TO LOW</span>
                                <span onClick={() => { dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' }) }}>LOW TO HIGH</span>
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
                                Showing {state.filterStore.length > 0 ? state.filterStore.length : products.length} results
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
                                                <RatedCard product={val} />
                                            </div>
                                        )
                                    }) :
                                    products.map((val, index) => {
                                        return (
                                            <div key={index}>
                                                <RatedCard product={val} />
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
