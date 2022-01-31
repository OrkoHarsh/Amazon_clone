export const initialState = {
    basket: [],
};



const reducer = (state , action) =>{
    switch (action.type) {
        case "ADD_TO_BASKET":
            //LOGIC FOR ADDING ITEM TO BASKET
            return{state}
            break;
        case "REMOVE_TO_BASKET":
            //LOGIC FOR REMOVING ITEMS FROM THE BASKET
            return {state} 
            break;       
        default:
            return state;
    }
}


export default reducer;