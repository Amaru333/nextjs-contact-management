import React from "react";
import ContactList from "./ContactList";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "./styles/HomePage.module.css";

function HomePage() {
  const contacts = useSelector((state) => state.contactReducer);
  return (
    <div className={styles.container}>
      {contacts.length > 0 ? (
        <div>
          <div className={styles.header}>
            <p className={styles.header_name}>Name</p>
            <p className={styles.header_ph}>Phone number</p>
            <p className={styles.header_mail}>Email</p>
            <p className={styles.header_action}>Actions</p>
          </div>
          {contacts.map((contact) => (
            <ContactList
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              email={contact.email}
              favorite={contact.favorite}
            />
          ))}
          <div style={{ textAlign: "-webkit-center" }}>
            <Link href="/add">
              <p className={styles.button}>Add another contact</p>
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={styles.container}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p>Contact list is empty</p>
          <Link href="/add">
            <p className={styles.button}>Add a new contact</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;
