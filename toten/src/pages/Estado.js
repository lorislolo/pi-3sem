import Button from '../components/Button'
import styles from './Estado.module.css'

function Estado () {
    return(
        <div className={styles.container}>
            <label htmlFor='Estado'>Escolha seu Estado</label>
            <select name="Estado" id="Estado">
            <option value="">Estado...</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="São Paulo">São Paulo</option>
            </select>

            <label htmlFor='Cidade'>Esolha sua Cidade</label>
            <select name="Cidade" id="Cidade">
            <option value="">Cidade...</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Caraguatatuba">São José Dos Campos</option>
            </select>

            <div className={styles.buttonPosition}>
                <Button url='/Cidade' type="button" value="Voltar"/>
                <Button url='/NomeIdade' type="button" value="Avançar"/>
            </div>
        </div>
    )
}

export default Estado