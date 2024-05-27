import Button from '../components/Button'
import FormInput from '../components/FormInput'
import styles from './NomeIdade.module.css'
import ButtonImage from '../components/ButtonImage'
import man from '../img/man.png'
import woman from  '../img/womam.png'
import other from '../img/other.png'

function NomeIdade () {
    return(
        <div className={styles.container}>
            <FormInput
            id="Nome"
            text="Digite seu Nome"
            type="text"
            placeholder="Nome Completo"
            />

            <FormInput
            id="Idade"
            text="Digite sua idade"
            type="text"
            placeholder="Idade"
            />

            <div>
                <ButtonImage image={man}/>
                <ButtonImage image={woman}/>
                <ButtonImage image={other}/>
            </div>

            <div className={styles.buttonPosition}>
                <Button type="button" value="Voltar" url='/Estado'/>
                <Button type="button" value="Avançar" url='/CadastrarOutro'/>
            </div>
        </div>
    )
}

export default NomeIdade