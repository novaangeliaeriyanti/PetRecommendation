import * as ActionType from "../constants/CampDetailConstant.js";

//CRITERIA
export const doGetBootcampRequest = (payload) => ({
  type: ActionType.GET_BOOTCAMP_REQUEST,
  payload,
});

export const doGetBootcampSucceed = (payload) => ({
  type: ActionType.GET_BOOTCAMP_SUCCEED,
  payload,
});

export const doGetBootcampFailed = (payload) => ({
  type: ActionType.GET_BOOTCAMP_FAILED,
  payload,
});

//CRITERIA TABLE
export const doGetCriteTableRequest = (payload) => ({
  type: ActionType.GET_CRITETABLE_REQUEST,
  payload,
});

export const doGetCriteTableSucceed = (payload) => ({
  type: ActionType.GET_CRITETABLE_SUCCEED,
  payload,
});

export const doGetCriteTableFailed = (payload) => ({
  type: ActionType.GET_CRITETABLE_FAILED,
  payload,
});

//PET TABLE
export const doGetPetRequest = (payload) => ({
  type: ActionType.GET_PET_REQUEST,
  payload,
});

export const doGetPetSucceed = (payload) => ({
  type: ActionType.GET_PET_SUCCEED,
  payload,
});

export const doGetPetFailed = (payload) => ({
  type: ActionType.GET_PET_FAILED,
  payload,
});

