import * as ActionType from "../constants/CampDetailConstant";

const INIT_STATE = {
  allpet:[]
};

//CRITERIA TABLE
const PetReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_PET_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_PET_SUCCEED:
      return applyGetPetSucceed(state, action);

    default:
      return state;
  }
};

const applyGetPetSucceed = (state, action) => {
  let result = [action.payload]
  console.log(result);
  return {
    ...state,
    allpet: result,
  };
};

export default PetReducer;

