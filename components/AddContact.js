import React, { useState } from "react";
import { addContact } from "../redux/contacts/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/AddContact.module.css";
import { useRouter } from "next/router";

export default function AddContact() {
  const Router = useRouter();

  const dispatch = useDispatch();

  const store = useSelector((state) => state.contactReducer);

  console.log(store);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const res = dispatch(
      addContact({
        name: name,
        number: number,
        email: email,
        favorite: false,
      })
    );
    if (res) {
      console.log("done");
    }
    Router.replace("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <p className={styles.label_name}>Name: </p>
        <input
          className={styles.input}
          placeholder="Name"
          onChange={handleName}
        />
      </div>
      <div className={styles.label}>
        <p className={styles.label_name}>Number: </p>
        <input
          className={styles.input}
          placeholder="Number"
          onChange={handleNumber}
        />
      </div>
      <div className={styles.label}>
        <p className={styles.label_name}>Email: </p>
        <input
          className={styles.input}
          placeholder="Email"
          onChange={handleEmail}
        />
      </div>
      <button className={styles.button} onClick={handleSubmit}>
        Add Contact
      </button>
    </div>
  );
}
