import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function favorites() {
  return (
    <div>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Favorites contact list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <p>Test</p>
      </div>
    </div>
  );
}
