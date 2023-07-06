import { ReactNode, Dispatch } from "react";

// api return types
export type SpreadsheetStateType = {
  something: string;
};

// context types
export type AppContextType = {
  state: SpreadsheetStateType;
  dispatch: Dispatch<ActionType>;
};

export type ActionType = { type: "UPDATE_SOMETHING"; payload: string };

export type AppProviderProps = {
  children: ReactNode;
};
