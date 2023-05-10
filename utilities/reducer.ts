import { REDUCER_ACTION_TYPE } from "./action";
import { WebStateType } from "./types";

type ReducerAction = { type: REDUCER_ACTION_TYPE; payload?: any };

export const reducer = (
  state: WebStateType,
  action: ReducerAction
): WebStateType => {
  if (action.type === REDUCER_ACTION_TYPE.SET_SMALL_NAVBAR_TRUE) {
    return { ...state, small_navbar: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_SMALL_NAVBAR_FALSE) {
    return { ...state, small_navbar: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
