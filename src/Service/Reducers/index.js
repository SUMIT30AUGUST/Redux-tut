 //its root reducer file
import { combineReducers } from "redux";
 import cardItems from "./reducer";
 //combineReducers is a high level component
 export default combineReducers({
    cardItems,
 })