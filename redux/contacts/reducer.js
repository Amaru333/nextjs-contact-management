import {
  ADD_CONTACT,
  ADD_FAVORITES,
  REMOVE_CONTACT,
  REMOVE_FAVORITES,
  EDIT_CONTACT,
} from "./actionTypes";

let initialState = [];
if (typeof window !== "undefined") {
  if (window.localStorage.getItem("contact")) {
    const item = JSON.parse(window.localStorage.getItem("contact"));
    initialState = item;
  }
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case EDIT_CONTACT:
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          name: action.payload.name,
          number: action.payload.number,
          email: action.payload.email,
          favorite: action.payload.favorite,
        },
        ...state.slice(index + 1),
      ];

    case ADD_FAVORITES:
      const favID = action.payload.id;
      const favContacts = state.filter((c) => {
        if (c.id === favID) {
          c.favorite = true;
        }
        return c;
      });
      return [...favContacts];

    case REMOVE_CONTACT:
      const removeID = action.payload.id;
      const removeContacts = state.filter((c) => {
        if (c.id !== removeID) {
          return c;
        }
        // return c;
      });
      return [...removeContacts];

    case REMOVE_FAVORITES:
      const remFavID = action.payload.id;
      const favContact = state.filter((f) => {
        if (f.id === remFavID) {
          f.favorite = false;
        }
        return f;
      });
      return [...favContact];

    default:
      return state;
  }
};

export default contactReducer;
