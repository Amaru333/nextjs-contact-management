import {
  ADD_CONTACT,
  ADD_FAVORITES,
  REMOVE_CONTACT,
  REMOVE_FAVORITES,
  EDIT_CONTACT,
} from "./actionTypes";

let nextContactID = 0;

export const editContact = (contact) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_CONTACT,
      payload: {
        id: contact.id,
        name: contact.name,
        number: contact.number,
        email: contact.email,
        favorite: contact.favorite,
      },
    });
    return true;
  };
};

export const addContact = (contact) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        id: ++nextContactID,
        ...contact,
      },
    });
    return true;
  };
};

export const removeContact = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CONTACT,
      payload: id,
    });
    return true;
  };
};

export const addFavorite = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_FAVORITES,
      payload: id,
    });
  };
};

export const removeFavorite = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FAVORITES,
      payload: id,
    });
  };
};
