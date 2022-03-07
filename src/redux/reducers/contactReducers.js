import { ActionTypes } from "../constants/action-types";
const initialState = {
  contacts: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case ActionTypes.ADD_CONTACT:
      console.log("--contactReducer--", action.payload);
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};
