import styles from './FormInput.module.css'

function FormInput ({id, type, placeholder, text}) {

return(
    <div className={styles.ContainerInput}>
      <label htmFor={id}>{text}</label>
      <input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      />
    </div>
)
}

export default FormInput