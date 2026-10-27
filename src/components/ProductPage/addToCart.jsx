import { useSelector } from "react-redux";
import React, { useMemo, useState, useRef, useContext, useCallback} from "react"
import ProductPage from './index'
import './css/Productpage.css'
import Theme from './appTheme'
import {useDispatch} from "react-redux"
import {RemoveProductFromCart} from '../../redux/CartSlice'

function AddToCart(props){

    const{viewCart,setViewCart}= props;  
    const AddedCartData = useSelector((state)=>state.cart.cartItem);
    const productCount = useRef(1);
    const [increment, setIncrement]= useState({});
    const [decrement, setdecrement]= useState(1);
    const {theme, setTheme} = useContext(Theme)
    const dispatch = useDispatch();

    const handleBackToProduct = () =>{
        setViewCart(false);
    }

    const handleIncrement = (id) =>{
        setIncrement((prev)=>{
            return {...prev, [id]: (prev[id] || 1)+1};
        }
        );
    }
    
    const handledecrement = (id) =>{
     setIncrement((prev) =>{
        return {...prev, [id]: (prev[id] || 1) - 1};
     })
    }

    const handleDeleteProductFromCart = useCallback((CartId) =>{
      dispatch(RemoveProductFromCart(CartId))
    },[dispatch])

    const cartProducts = useMemo(()=>{
        return AddedCartData.map((data) => (
                    <div className="SingleProduct">
                <div key={data.id}>
                    <h3>{data.title}</h3>
                        <img src={data.thumbnail} alt={data.title} width="100" />
                        <p>Price: ${data.price}</p>
                        <button onClick={() => handledecrement(data.CartId)}>-</button>
                        <span >{increment[data.CartId]||1}</span>
                        <button onClick={()=>handleIncrement(data.CartId)}>+</button>
                        <button onClick={()=>handleDeleteProductFromCart(data.CartId)}>Delete</button>
                    </div>
                    </div>
            ))
    })

    if(!viewCart){
<ProductPage />
    }
    return(
        <>
        <div className={`app-theme ${theme}`}>

         <div>
                <button onClick={handleBackToProduct}>Back</button>
            </div>
        <div className="ProductPage">
           {cartProducts}
        </div>
        </div>
        </>
    )
}

export default AddToCart;