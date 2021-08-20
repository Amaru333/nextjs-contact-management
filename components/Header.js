import React from "react";
import Link from "next/link";

import styles from "./styles/Header.module.css";

export default function Header() {
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
