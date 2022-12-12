import actionTypes from "../actionTypes";
import { IAction } from "@interfaces/redux";

const initialState = null;

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.TRANSLATION.SET_TRANSLATIONS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
