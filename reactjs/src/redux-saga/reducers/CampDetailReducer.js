import * as ActionType from "../constants/CampDetailConstant";

const INIT_STATE = {
  bootcamps: [],
  critetable:[]
};

//CRITERIA
const BootcampReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BOOTCAMP_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_BOOTCAMP_SUCCEED:
      return applyGetBootcampSucceed(state, action);

    default:
      return state;
  }
};

const applyGetBootcampSucceed = (state, action) => {
  let result = [action.payload]
  console.log(result);
  //let hasil = [...result]

  return {
    ...state,
    bootcamps: result,
  };
};

//CRITERIA TABLE
const CriteTableReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_CRITETABLE_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_CRITETABLE_SUCCEED:
      return applyGetCriteTableSucceed(state, action);

    default:
      return state;
  }
};

const applyGetCriteTableSucceed = (state, action) => {
  let result = [action.payload]
  console.log(result);
  //let hasil = [...result]

  return {
    ...state,
    critetable: result,
  };
};

export default BootcampReducer;

