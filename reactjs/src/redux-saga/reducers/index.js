import { combineReducers } from "redux";
import BootcampReducer from "./CampDetailReducer";
import CriteTableReducer from "./CriteTableReducer"
import PetReducer from "./PetReducer"
import CollectReducer from "./CollectReducer";

const rootReducer = combineReducers({
    bootcampState : BootcampReducer,
    critetableState : CriteTableReducer,
    petState : PetReducer,
    collectState: CollectReducer,
})

export default rootReducer