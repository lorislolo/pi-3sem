import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ type, value, url, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (url) {
      navigate(url);
    }
  };

  return (
    <button type={type} onClick={() => { handleClick(); if (onClick) { onClick() } }} className={styles.button}>
      {value}
    </button>
  );
}

export default Button;