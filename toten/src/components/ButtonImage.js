import styles from './buttonImage.module.css'

function ButtonImage(props) {
    return(
        <>
        <button type="submit" className={styles.buttonImage}>
            <img src={props.image} alt="caragua" />
        </button>
        </>
    )
}

export default ButtonImage