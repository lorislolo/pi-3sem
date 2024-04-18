import './Button.module.css'

function Button ({value, type}) {

return(
    <>
    <input type={type} value={value}/>
    </>
)
}

export default Button