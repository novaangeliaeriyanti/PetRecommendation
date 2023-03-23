import {
    call,
    put,
  } from "redux-saga/effects";
  
  import apiCampDetail from "../../api/ApiCampDetail";
  import {
    doGetBootcampSucceed,
    doGetBootcampFailed,
    doGetCriteTableSucceed,
    doGetCriteTableFailed,
    doGetPetSucceed,
    doGetPetFailed
  } from "../actions/CampDetailAction";
  
  function* handleGetBootcamp(action) {
    //console.log("sudah sampai di middleware");
    const { payload } = action;
    try {
      const result = yield call(apiCampDetail.findAllHab, payload);
      yield put(doGetBootcampSucceed(result));
    } catch (error) {
      yield put(doGetBootcampFailed(error));
    }
  }

  function* handleGetCriteTable(action) {
    
    const { payload } = action;
    try {
      const result = yield call(apiCampDetail.findAllCrite, payload);
      yield put(doGetCriteTableSucceed(result));
      //console.log("Crite : ", result);
    } catch (error) {
      yield put(doGetCriteTableFailed(error));
    }
  }

  function* handleGetPet(action) {
    console.log("sudah sampai di middleware");
    const { payload } = action;
    try {
      const result = yield call(apiCampDetail.findAll, payload);
      yield put(doGetPetSucceed(result));
    } catch (error) {
      yield put(doGetPetFailed(error));
    }
  }
    
  export { handleGetBootcamp,handleGetCriteTable,handleGetPet };
  