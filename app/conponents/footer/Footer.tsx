"use client";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__container__left}>
          <div className={styles.Footer__container__left__logo}></div>
          <div className={styles.Footer__container__left__text}>
            <p>2023 Skillpark</p>
          </div>
        </div>
        <div className={styles.Footer__container__right}>
          <div className={styles.Footer__container__right__text}>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
