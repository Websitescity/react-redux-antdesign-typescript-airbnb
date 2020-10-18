import { Action, Reducer } from "redux";

export enum ActionType {
  UpdateName = "UPDATE_NAME",
  UpdateAddress = "UPDATE_ADDRESS",
  DeleteName = "DELETE_NAME",
  DeleteAddress = "DELETE_ADDRESS"
}

export interface InitialState {
  name: string;
  address: string;
}

export const initialState: InitialState = {
  name: "",
  address: ""
};

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action
) => {
  console.log(state);
  if (action.type === ActionType.UpdateName) {
    return { ...state, name: action.payload.name || "" };
  } else if (action.type === ActionType.DeleteName) {
    return { ...state, name: "" };
  } else if (action.type === ActionType.DeleteAddress) {
    return { ...state, address: "" };
  } else if (action.type === ActionType.UpdateAddress) {
    return { ...state, address: action.payload.address || "" };
  } else return state;
};
