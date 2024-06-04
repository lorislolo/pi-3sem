import React from 'react';
import styles from './P.module.css';

function P({ text }) {
  return (
    <p className={styles.P}>{text}</p>
  );
}

export default P;
