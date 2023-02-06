import { ADD_TO_CART } from "../constants"

const initialState={
    cardData : []
}

// we dont have to import action , action called automatically internally 
export default function cardItems(state=initialState,action)
{

switch(action.type){
    case ADD_TO_CART : 
         return {
            ...state,
            cardData: action.data
         }
             default :
             return  state 
        }
}