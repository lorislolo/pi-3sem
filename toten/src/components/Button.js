import './Button.module.css';
import { useNavigate } from 'react-router-dom';

function Button ({value, type, url}) {

const navigate = useNavigate();

const HandleClickButton = () => {
    navigate(url)
}

return(
    <>
    <input onClick={HandleClickButton} type={type} value={value}/>
    </>
)
}

export default Button