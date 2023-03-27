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
  return {
    state,
    collect_data: state.collect_data,
  };
};

export default CollectReducer;
