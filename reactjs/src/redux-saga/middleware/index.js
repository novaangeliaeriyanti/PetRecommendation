import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeBootcamp from '../constants/CampDetailConstant'
import { handleGetBootcamp,handleGetCriteTable,handleGetPet,handleAddCollect } from './CampDetailSaga'

function *watchAll(){
    yield all([
        takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_REQUEST,handleGetBootcamp),
        takeEvery(ActionTypeBootcamp.GET_CRITETABLE_REQUEST,handleGetCriteTable),
        takeEvery(ActionTypeBootcamp.GET_PET_REQUEST,handleGetPet),
        takeEvery(ActionTypeBootcamp.ADD_COLLECT_REQUEST,handleAddCollect),
    ])  
}

export default watchAll;