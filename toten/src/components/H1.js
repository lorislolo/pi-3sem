import React from 'react';
import styles from './H1.module.css';

function H1({ text }) {
  return (
    <h1 className={styles.h1}>{text}</h1>
  );
}

export default H1;
