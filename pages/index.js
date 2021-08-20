import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import ContactList from "../components/ContactList";
import { useSelector } from "react-redux";

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
        {contacts.allContacts.map((contact) => (
          <ContactList
            key={contact.id}
            id={contact.id}
            name={contact.contact.name}
            number={contact.contact.number}
            favorite={contact.contact.favorite}
          />
        ))}
      </div>
    </div>
  );
}
