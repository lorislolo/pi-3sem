import React from 'react'
import styles from './FormInput.module.css'

function FormInput({ id, text, type, placeholder, value, onChange }) {
  return (
    <div className={styles.ContainerInput}>
      <label className={styles.formlabel} htmlFor={id}>
        {text}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.forminput}
      />
    </div>
  )
}

export default FormInput
