
import styles from './buttonImage.module.css'
import {useNavigate} from 'react-router-dom'


function ButtonImage({image, url}) {
    const navigate = useNavigate()
    
    const HandleClickButton = () => {
        navigate(url)
    }

    return(
        <>
        <button onClick={HandleClickButton} type="submit" className={styles.buttonImage}>
            <img src={image} />
        </button>
        </>
    )
}

export default ButtonImage