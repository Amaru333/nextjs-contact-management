import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ContactList({ id, name, number, favorite }) {
  const contacts = useSelector((state) => state.contactReducer);
  console.log(contacts.allContacts);

  const dispatch = useDispatch();

  const addFavorite = () => {
    // const res = dispatch(
    //   addFavorite({
    //     id: id,
    //   })
    // );
    // if (res) {
    //   console.log("success");
    // }
    console.log("test");
  };
  return (
    <div>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <p>
        Favorite:
        {!favorite ? (
          <span onClick={addFavorite}>Add favorite</span>
        ) : (
          <span>Remove favorite</span>
        )}
      </p>
    </div>
  );
}
