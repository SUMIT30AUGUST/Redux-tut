import { ADD_TO_CART } from "../constants"

const initialState={
    cardData : []
}

// we dont have to import action , action called automatically internally 
export default function cardItems(state=[],action)
{
    //console.log(JSON.stringify(...state)+" it is" + state[Symbol.iterator])
switch(action.type){
    case ADD_TO_CART : 
    //console.warn('reducer',action)     
    return [
            ...state,
           { cardData: action.data}
    ]
             default :
             return  state 
        }
}