import React, { useEffect } from "react";
import Link from "next/link";

import { useSelector } from "react-redux";

import styles from "./styles/Header.module.css";

export default function Header() {
  const contacts = useSelector((state) => state.contactReducer);
  // let local_data = [];
  // for (let a = 0; a < contacts.length; a++) {
  //   let data = {
  //     id: contacts[a].id,
  //     name: contacts[a].name,
  //     number: contacts[a].number,
  //     email: contacts[a].email,
  //     favorite: contacts[a].favorite,
  //   };
  //   local_data.push(data);
  // }
  // console.log(local_data);
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(local_data));
  // });

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <Link href="/">
          <p className={styles.navbar_component}>
            <a>All Contacts</a>
          </p>
        </Link>
        <Link href="/add">
          <p className={styles.navbar_component}>
            <a>Add Contact</a>
          </p>
        </Link>
        <Link href="/favorites">
          <p className={styles.navbar_component}>
            <a>Favorites</a>
          </p>
        </Link>
      </div>
    </div>
  );
}
