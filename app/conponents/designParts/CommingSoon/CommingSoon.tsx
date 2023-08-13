import React from "react";
import styles from "./CommingSoon.module.scss";

function CommingSoon() {
  return (
    <>
      <div className={styles.centerImage}>
        <div className={styles.contentsBox}>
          <div className={styles.pulseWrapper}>
            <div className={styles.pulseDot1}></div>
            <div className={styles.pulseDot2}></div>
            <div className={styles.pulseDot3}></div>
          </div>
        </div>
        <div className={styles.comming}>
          <h1 className={styles.titleComming}>Comming soon...</h1>
        </div>
      </div>
    </>
  );
}

export default CommingSoon;
