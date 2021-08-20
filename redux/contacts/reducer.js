import { ADD_CONTACT, ADD_FAVORITES } from "./actionTypes";

const initialState = {
  allContacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        // ...state,
        allContacts: [...state.allContacts, action.payload],
      };
    // case ADD_FAVORITES:
    //   return {
    //     allContacts: [
    //       ...state.allContacts,
    //       (state.allContacts[action.id].favorites = true),
    //     ],
    //   };
    default:
      return state;
  }
};

export default contactReducer;
