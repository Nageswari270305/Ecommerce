

const WishListReducer = (state, action) =>{

    switch(action.type){

        case "Add_To_WishList":
            return [...state, {...action.payload, WishListId : crypto.randomUUID()}]
   
        case "Delete_WishList":
            return state.filter((data) => data.WishListId !== action.payload)



              default:
            return state;
    }
} 

export default WishListReducer;