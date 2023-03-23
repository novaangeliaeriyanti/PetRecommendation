import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeBootcamp from '../constants/CampDetailConstant'
import { handleGetBootcamp,handleGetCriteTable,handleGetPet } from './CampDetailSaga'

function *watchAll(){
    yield all([
        takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_REQUEST,handleGetBootcamp),
        takeEvery(ActionTypeBootcamp.GET_CRITETABLE_REQUEST,handleGetCriteTable),
        takeEvery(ActionTypeBootcamp.GET_PET_REQUEST,handleGetPet),
    ])  
}

export default watchAll;