import styles from'./Button.module.css';
import { useNavigate } from 'react-router-dom';

function Button ({value, type, url}) {

const navigate = useNavigate();

const HandleClickButton = () => {
    navigate(url)
}

return(
    <>
    <input className={styles.button} onClick={HandleClickButton} type={type} value={value}/>
    </>
)
}

export default Button