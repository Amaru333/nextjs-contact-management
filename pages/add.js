import Head from "next/head";
import React from "react";
import AddContact from "../components/AddContact";
import Header from "../components/Header";

export default function Add() {
  return (
    <div>
      <Head>
        <title>Add Contact</title>
        <meta name="description" content="Add contact to your contact list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <AddContact />
      </div>
    </div>
  );
}
