import styles from './H1.module.css'

function H1 (props) {
    return(
        <>
        <h1 className={styles.h1}>{props.text}</h1>
        </>
    )
}

export default H1