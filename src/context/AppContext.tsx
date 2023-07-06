import React, { useReducer, createContext, ReactNode } from "react";
import {
  AppContextType,
  ActionType,
  SpreadsheetStateType,
  AppProviderProps,
} from "../types/types";

const reducer = (
  state: SpreadsheetStateType,
  action: ActionType
): SpreadsheetStateType => {
  switch (action.type) {
    case "UPDATE_SOMETHING":
      return { ...state, something: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  something: "",
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
