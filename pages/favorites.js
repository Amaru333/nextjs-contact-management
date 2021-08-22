import Head from "next/head";
import Header from "../components/Header";
import ContactList from "../components/ContactList";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";

export default function favorites() {
  const contacts = useSelector((state) => state.contactReducer);
  let j = 0;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].favorite === true) {
      j += 1;
    }
  }
  return (
    <div>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Favorites contact list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        {j > 0 ? (
          <div>
            <div className={styles.header}>
              <p className={styles.header_name}>Name</p>
              <p className={styles.header_ph}>Phone number</p>
              <p className={styles.header_mail}>Email</p>
              <p className={styles.header_action}>Actions</p>
            </div>
            {contacts
              .filter((c) => c.favorite === true)
              .map((contact) => (
                <ContactList
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  email={contact.email}
                  favorite={contact.favorite}
                />
              ))}
          </div>
        ) : (
          <div>
            <p>Favorite list is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
