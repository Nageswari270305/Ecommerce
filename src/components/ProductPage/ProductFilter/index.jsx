import { useDispatch, useSelector } from "react-redux";
import {filterRating, applyFilter} from '../../../redux/CartSlice'
import { useState } from "react";
import FilterProducts from '../ProductFilter/FIlterReducer'

function RatingFilter(props){

    const {product, setProduct, filterapplied, setFilterapplied, clearFilter, setClearFilter } = props;
    const dispatch = useDispatch();
    const Ratings = useSelector((state)=>state.cart.Rating);

    return(
        <>
        <div>
            <div>
                <h5>
                    <label>
                    <input type="checkbox" 
                    />
                    Rating
                </label>
                </h5>
                <label>
                    <input type="checkbox" 
                    checked={Ratings.includes(1)}
                    onChange={()=>dispatch(filterRating(1))}
                    />
                    1
                </label>
                <label>
                    <input type="checkbox" 
                     checked={Ratings.includes(2)}
                    onChange={()=>dispatch(filterRating(2))}/>
                    2
                </label>
                <label>
                    <input type="checkbox" 
                     checked={Ratings.includes(3)}
                    onChange={()=>dispatch(filterRating(3))}/>
                    3
                </label>
                <label>
                    <input type="checkbox" 
                     checked={Ratings.includes(4)}
                    onChange={()=>dispatch(filterRating(4))}/>
                    4
                </label>
                <label>
                    <input type="checkbox" 
                     checked={Ratings.includes(5)}
                    onChange={()=>dispatch(filterRating(5))}/>
                    5
                </label>
                {/* <button onClick={()=>handleApplyFilter()}>Apply</button> */}
            </div>
                {/* {filterapplied && <FilterProducts
                    product={product}
                    setProduct={setProduct}
                    clearFilter={clearFilter}
                    setClearFilter={setClearFilter}
                    filterapplied={filterapplied}
                    setFilterapplied={setFilterapplied}
                />} */}
        </div>
        </>
    )
}

export default RatingFilter;

