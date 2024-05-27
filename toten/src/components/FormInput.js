import styles from './FormInput.module.css'

function FormInput ({id, type, placeholder, text}) {

return(
    <div className={styles.ContainerInput}>
      <label className={styles.formlabel} htmFor={id}>{text}</label>
      <input className={styles.forminput}
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      />
    </div>
)
}

export default FormInput