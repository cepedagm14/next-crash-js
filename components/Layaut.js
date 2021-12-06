import React from "react";
import styles from "../styles/Layaut.module.css";
import { Nav } from "./Nav";
import { Header } from "./Header";

const Layaut = ({ children }) => {
  return (
    <>
    <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
            <Header/>
            {children}</main>
      </div>
    </>
  );
};

export default Layaut;
