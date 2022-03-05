import { ActionTypes } from "../constants/action-types";
const initialState = {
  contacts: [
    {
      id: 1,
      name: "priyansh sharma",
      email: "priyansh@gmail.com",
      phone: "8827611875",
    },
    {
      id: 2,
      name: "Manvi sharma",
      email: "manvi@gmail.com",
      phone: "8827611875",
    },
  ],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CONTACTS:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};
