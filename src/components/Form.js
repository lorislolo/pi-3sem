
import Button from "./Button";
import FormInput from "./FormInput";

function Form () {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
            <FormInput placeholder='insira seu nome1' id='nome1' text='teste: nome1'/>
            <FormInput placeholder='insira seu nome2' id='nome2' text='teste: nome2'/>
            <FormInput placeholder='insira seu nome3' id='nome3' text='teste: nome3'/>

            <Button type="submit" value='enviar'/>
            </form>
        </div>
    )
}

export default Form