import { useMemo } from "react";

function WishListCart (props){

const {wishlists, setWishLists, WishList, handleWishlistDelete, viewWishList, setViewWishList} = props;

const handleBackToProduct = () =>{
setWishLists(false);
setViewWishList(false);
}

const WishListProduct = useMemo(()=>{
    return WishList.map((data) =>(
        <div className="SingleProduct">
                <div key={data.id}>
                    <h3>{data.title}</h3>
                        <img src={data.thumbnail} alt={data.title} width="100" />
                        <p>Price: ${data.price}</p>
                        {/* <button onClick={() => handledecrement(data.CartId)}>-</button> */}
                        {/* <span >{increment[data.CartId]||1}</span> */}
                        {/* <button onClick={()=>handleIncrement(data.CartId)}>+</button> */}
                        {/* <button onClick={()=>handleDeleteProductFromCart(data.CartId)}>Delete</button> */}
        <button onClick={()=>handleWishlistDelete(data.WishListId)}>Delete</button>

                    </div>
                    </div>
    ))
})
    return(
        <>
          <div>
                <button onClick={handleBackToProduct}>Back</button>
            </div>
        <div className="ProductPage">
           {WishListProduct}
        </div>
        </>
    )
}

export default WishListCart;