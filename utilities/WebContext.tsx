"use client";

import { createContext, useCallback, useContext, useReducer } from "react";
import { WebStateType } from "./types";
import { reducer } from "./reducer";
import { REDUCER_ACTION_TYPE } from "./action";

export const initialState: WebStateType = {
  small_navbar: false,
};

const useWebContext = (initialState: WebStateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSmallNavbarTrue = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_SMALL_NAVBAR_TRUE });
  }, []);

  const setSmallNavbarFalse = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_SMALL_NAVBAR_FALSE });
  }, []);

  return {
    ...state,
    setSmallNavbarTrue,
    setSmallNavbarFalse,
  };
};

type UseWebContextType = ReturnType<typeof useWebContext>;

const initialContextState: UseWebContextType = {
  ...initialState,
  setSmallNavbarTrue: () => {},
  setSmallNavbarFalse: () => {},
};

export const WebContext = createContext<UseWebContextType>(initialContextState);

type ChildrenType = {
  children?: React.ReactElement | React.ReactElement[] | undefined;
};

export const WebProvider = ({ children }: ChildrenType): React.ReactElement => {
  return (
    <WebContext.Provider value={useWebContext(initialState)}>
      {children}
    </WebContext.Provider>
  );
};

export const useWeb = (): typeof initialContextState => {
  return useContext(WebContext);
};
