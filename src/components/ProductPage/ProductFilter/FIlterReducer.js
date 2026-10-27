import { useSelector, useDispatch} from "react-redux"
import '../css/Productpage.css'
import {clearFilters, removeRating, removeTag} from '../../../redux/CartSlice'
import ProductPage from '../../ProductPage/index'

function FilterProducts(props){
const {clearFilter , setClearFilter, filterapplied , setFilterapplied} = props

    const FilteredProduct = useSelector((state)=> state.cart.FilteredProduct);
    const dispatch  = useDispatch();
    console.log("FilteredProduct",FilteredProduct);

     const handleClearFilter = () =>{
        setClearFilter(true);
        setFilterapplied(false);
       dispatch(clearFilters());
       dispatch(removeRating());
       dispatch(removeTag());
       <ProductPage />
    }

    return(

    <>
    <div>
        <button onClick={()=>handleClearFilter()}>Clear</button>
    </div>
    { filterapplied &&  (
    <div className="ProductPage" >
                {FilteredProduct.map((data) => (
                    <div className="SingleProduct">
                    <div key={data.id}>
                        <h3>{data.title}</h3>
                        <img src={data.thumbnail} alt={data.title} />
                        <p>Price: ${data.price}</p>
                        <p>Rating : {data.rating}</p>
                        <p>Discount : {data.discountPercentage}</p>
                        <p>Tag : {data.tags[0]}</p>
                    </div>
                    </div>
                ))}
            </div>
    )}
    </>
    )
}

export default FilterProducts;