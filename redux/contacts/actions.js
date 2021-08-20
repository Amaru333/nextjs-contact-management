import { ADD_CONTACT, ADD_FAVORITES } from "./actionTypes";

let nextContactID = 0;

export const addContact = (contact) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        id: ++nextContactID,
        contact,
      },
    });
    return true;
  };
};

// export const addFavorite = (id) => {
//   return (dispatch) => {
//     dispatch({
//       type: ADD_FAVORITES,
//       payload: {
//         id: id,
//       },
//     });
//   };
// };
