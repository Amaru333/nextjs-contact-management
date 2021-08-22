import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import ContactList from "../components/ContactList";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Home() {
  const contacts = useSelector((state) => state.contactReducer);
  return (
    <div>
      <Head>
        <title>Contact Management System</title>
        <meta name="description" content="Contact Management System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
    </div>
  );
}
