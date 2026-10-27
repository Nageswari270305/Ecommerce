import { useDispatch, useSelector} from "react-redux";
import {filterTag} from '../../../redux/CartSlice'

function TagFilter(){
    const dispatch = useDispatch();
    const Tag = useSelector((state)=> state.cart.Tags);
    console.log("Tag",Tag);

    return(
     <>
     <div>
        <h5>
            <label>
                <input type="checkbox" />
                Tag
            </label>
        </h5>
        <label>
            <input type="checkbox"
            checked={Tag.includes("Beauty")}
            onChange={()=>dispatch(filterTag("Beauty"))}
            />
            Beauty
        </label>
         <label>
            <input type="checkbox"
            checked={Tag.includes("Fragrance")}
            onChange={()=>dispatch(filterTag("Fragrance"))}
            />
            Fragrance
        </label>
         <label>
            <input type="checkbox"
            checked={Tag.includes("Furniture")}
            onChange={()=>dispatch(filterTag("Furniture"))}
            />
            Furniture
        </label>
         <label>
            <input type="checkbox"
            checked={Tag.includes("Fruits")}
            onChange={()=>dispatch(filterTag("Fruits"))}
            />
            Fruits
        </label>
        <label>
            <input type="checkbox"
            checked={Tag.includes("Meat")}
            onChange={()=>dispatch(filterTag("Meat"))}
            />
            Meat
        </label>
        <label>
            <input type="checkbox"
            checked={Tag.includes("Pet supplies")}
            onChange={()=>dispatch(filterTag("Pet supplies"))}
            />
            Pet supplies
        </label>
        <label>
            <input type="checkbox"
            checked={Tag.includes("Cooking essentials")}
            onChange={()=>dispatch(filterTag("Cooking essentials"))}
            />
            Cooking essentials
        </label>
         <label>
            <input type="checkbox"
            checked={Tag.includes("Dairy")}
            onChange={()=>dispatch(filterTag("Dairy"))}
            />
            Dairy
        </label>
         <label>
            <input type="checkbox"
            checked={Tag.includes("Seafood")}
            onChange={()=>dispatch(filterTag("Seafood"))}
            />
            Seafood
        </label>
        <label>
            <input type="checkbox"
            checked={Tag.includes("Condiments")}
            onChange={()=>dispatch(filterTag("Condiments"))}
            />
            Condiments
        </label>
        <label>
            <input type="checkbox"
            checked={Tag.includes("Desserts")}
            onChange={()=>dispatch(filterTag("Desserts"))}
            />
            Desserts
        </label>
        <label>
            <input type="checkbox"
            checked={Tag.includes("Beverages")}
            onChange={()=>dispatch(filterTag("Beverages"))}
            />
             Beverages
        </label>
     </div>
     </>
    )
}

export default TagFilter;