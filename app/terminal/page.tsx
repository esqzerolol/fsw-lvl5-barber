"use client";

import styles from "./TerminalLoader.module.css";

export default function TerminalLoader() {
  return (
    <div className={styles.terminalLoader}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalTitle}>Terminal</div>
        <div className={styles.terminalControls}>
          <span className={`${styles.control} ${styles.close}`}></span>
          <span className={`${styles.control} ${styles.minimize}`}></span>
          <span className={`${styles.control} ${styles.maximize}`}></span>
        </div>
      </div>

      <div className={styles.text}>Loading data...</div>
    </div>
  );
}
