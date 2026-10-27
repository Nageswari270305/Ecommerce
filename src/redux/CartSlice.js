import {createSlice} from "@reduxjs/toolkit";
import { act } from "react";

const loadcart = () =>{
    try{
        return JSON.parse(localStorage.getItem("cartItem") || "[]");
    }
    catch{
        return [];
    }
}

const FilterRating = () =>{
    try {
        return JSON.parse(localStorage.getItem("Rating") || "[]");
    }
    catch{
        return [];
    }
}

const FilteredProducts = () =>{
try{
    return JSON.parse(localStorage.getItem("FilteredProduct") || "[]" )
}
catch{
    return [];
}
}

const Filtertag = () =>{

    try{
        return JSON.parse(localStorage.getItem("Tags") || "[]")
    }
    catch{
        return [];
    }
}

const cartSlice = createSlice({
    name : "cart",

    initialState : { 
        cartItem : loadcart(),
        Rating : FilterRating(),
        FilteredProduct : FilteredProducts(),
        Tags: Filtertag(),
    },

    reducers :{
        addToCart : (state, action) =>{
            state.cartItem.push({...action.payload, CartId : crypto.randomUUID()});
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));

        },
        RemoveProductFromCart : (state, action) =>{
            state.cartItem = state.cartItem.filter((item) => item.CartId !== action.payload);
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        } ,
        
        filterRating : (state, action) =>{
         state.Rating = (state.Rating.includes(action.payload) ? 
                            (state.Rating.filter((rating) => rating !== action.payload)) : [...state.Rating, (action.payload)] );
        localStorage.setItem("Rating" , JSON.stringify(state.Rating));                          
        },

        applyFilter : (state, action) =>{
        
        state.FilteredProduct = (action.payload).filter((item)=>{
            const rating = state.Rating.length === 0 || state.Rating.includes(Math.floor(item.rating));
            const tage = state.Tags.length === 0 || state.Tags.some((tag)=>tag.toLowerCase() === item.tags[0]?.toLowerCase());

            return rating && tage;
        })
      localStorage.setItem("FilteredProduct", JSON.stringify(state.FilteredProduct));
      console.log("state.FilteredProducteeeeeeee", state.FilteredProduct);
        },

        clearFilters : (state, action ) =>{
            localStorage.removeItem("FilteredProduct");
            state.FilteredProduct = [];
        },
       
         removeRating : (state, action) =>{
            localStorage.removeItem("Rating");
            state.Rating=[];
         },

         filterTag : (state, action) =>{
          state.Tags = state.Tags.includes(action.payload) ? state.Tags.filter((item) => item !== action.payload ) : [...state.Tags, (action.payload)]
          console.log("State.Tags",state.Tags);
          localStorage.setItem("Tags", JSON.stringify(state.Tags));
         },

         removeTag : (state, action) =>{
            localStorage.removeItem("Tags");
            state.Tags = [];
         }
    }                                                                                                                                                                                                                           
})

export const {addToCart,RemoveProductFromCart, filterRating, applyFilter, clearFilters, removeRating, filterTag,removeTag } = cartSlice.actions;
export default cartSlice.reducer; 