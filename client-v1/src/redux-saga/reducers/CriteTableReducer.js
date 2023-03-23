import * as ActionType from "../constants/CampDetailConstant";

const INIT_STATE = {
  critetable:[]
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
  return {
    ...state,
    critetable: result,
  };
};

export default CriteTableReducer;

