import React, { useState } from "react";
import { addContact } from "../redux/contacts/actions";
import { useDispatch, useSelector } from "react-redux";

export default function AddContact() {
  const dispatch = useDispatch();

  const store = useSelector((state) => state.contactReducer);

  console.log(store);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    const res = dispatch(
      addContact({
        name: name,
        number: number,
        favorite: false,
      })
    );
    if (res) {
      console.log("done");
    }
  };

  return (
    <div>
      <input placeholder="Name" onChange={handleName} />
      <input placeholder="Number" onChange={handleNumber} />
      <button onClick={handleSubmit}>Add Contact</button>
    </div>
  );
}
