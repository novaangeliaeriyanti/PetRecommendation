import * as ActionType from "../constants/CampDetailConstant";

const INIT_STATE = {
  collect_data: [],
};

const CollectReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.ADD_COLLECT_REQUEST: {
      return {
        ...state,
      };
    }
    case ActionType.ADD_COLLECT_SUCCEED: {
      return applyAddCollectSucceed(state, action);
    }
    default:
      return state;
  }
};
const applyAddCollectSucceed = (state, action) => {
  const hasil = action.payload;
  console.log(hasil);
  return {
    state,
    collect_data: hasil,
  };
};

export default CollectReducer;
