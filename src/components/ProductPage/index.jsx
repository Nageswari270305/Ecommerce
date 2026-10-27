import React, {useCallback, useEffect, useState, useContext, useReducer} from "react";
import {useDispatch} from "react-redux"
import { addToCart, applyFilter } from "../../redux/CartSlice";
import AddToCart from './addToCart'
import './css/Productpage.css'
import ThemeSetting from './themeSetting'
import Theme from './appTheme'
import RatingFilter from './ProductFilter'
import TagFilter from './ProductFilter/TagFilter'
import FilterProducts from "./ProductFilter/FIlterReducer";
import WishListReducer from '../../redux/reducer'
import WishListCart from './wishlistcart'

function ProductPage(){

const [product, setProduct] = useState([]);
const [viewCart,setViewCart] = useState(false);
const [themeClicked, setThemeClicked] = useState(false);
const {theme, setTheme} = useContext(Theme)
const [filter, setFilter] = useState(false);
const [filterapplied, setFilterapplied] = useState(false);
const [clearFilter, setClearFilter] = useState(false);
const [wishlists, setWishLists] = useState(false);
const [WishList, Wishlistdispatch] = useReducer(WishListReducer, [])
 
console.log("wishList", WishList);
const dispatch = useDispatch();

useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((response)=> response.json())
    .then((data)=>setProduct(data.products))
    .catch((error)=>console.log(error))
},[]);

const addTocart= useCallback((data)=>{
 dispatch(addToCart(data)); 
},[dispatch])

const handleViewCart = () =>{
        setViewCart(true)
}

const handleThemeSetting = () =>{
 setThemeClicked(true);
}
 
const handleFilter = () =>{
   setFilter(filter ? false : true);
}

 const handleApplyFilter = () =>{
    dispatch(applyFilter(product));
    setFilterapplied(true);
    }


    const handlewishList = (data) =>{
        Wishlistdispatch({type : "Add_To_WishList", payload : data})
        setWishLists(true);

    }

    const handleWishlistDelete =(data)=>{
        Wishlistdispatch({type:"Delete_WishList", payload : data})
    }

    if(wishlists){
          return <WishListCart 
        wishlists={wishlists}
        setWishLists={setWishLists}
        WishList={WishList}
        handleWishlistDelete={handleWishlistDelete}

        />
    }

if(viewCart){
    return <AddToCart 
    viewCart={viewCart}
     setViewCart={setViewCart}
    />
}

console.log("filterapplied",filterapplied);
    return (
        <>
        <div className={`app-theme ${theme}`}>
        <div>
                <button onClick={
                    handleViewCart
                }
                >Cart</button>
            </div>
            <div>
                <button onClick={() => handleThemeSetting()}>Theme</button>
                {themeClicked && <ThemeSetting 
                 themeClicked={themeClicked}
                 setThemeClicked={setThemeClicked}
                />}
            </div>
            <div>
                <button onClick={handleFilter}>Filter</button>
                {filter && <RatingFilter
                product={product}
                setProduct={setProduct}
                filterapplied={filterapplied}
                setFilterapplied={setFilterapplied}
                clearFilter={clearFilter}
                setClearFilter={setClearFilter}
                />}
                {filter &&  <TagFilter />}
            </div>
           {filter && ( <button onClick={()=>handleApplyFilter()}>Apply</button> )}
            {((!filterapplied && !clearFilter) || (!filterapplied && clearFilter)) && (
            <div className="ProductPage" >
                
                {product.map((data) => (
                    <div className="SingleProduct">
                    <div key={data.id}>
                        <h3>{data.title}</h3>
                        <img src={data.thumbnail} alt={data.title} />
                        <p>Price: ${data.price}</p>
                        <p>Rating : {data.rating}</p>
                        <p>Discount : {data.discountPercentage}</p>
                        <p>Tag : {data.tags[0]}</p>
                        <button onClick={() => addTocart(data)}>Add Cart</button>
                        <button onClick={()=>handlewishList(data)}>Add to WishList</button>
                    </div>
                    </div>
                ))}
            </div>
            )}
                {filterapplied && <FilterProducts
                    product={product}
                    setProduct={setProduct}
                    clearFilter={clearFilter}
                    setClearFilter={setClearFilter}
                    filterapplied={filterapplied}
                    setFilterapplied={setFilterapplied}
                />}

</div>
        </>
    )
}

export default ProductPage;