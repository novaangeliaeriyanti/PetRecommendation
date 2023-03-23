import { combineReducers } from "redux";
import BootcampReducer from "./CampDetailReducer";
import CriteTableReducer from "./CriteTableReducer"
import PetReducer from "./PetReducer"

const rootReducer = combineReducers({
    bootcampState : BootcampReducer,
    critetableState : CriteTableReducer,
    petState : PetReducer
})

export default rootReducer