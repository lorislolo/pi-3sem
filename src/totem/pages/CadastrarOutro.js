import Button from '../components/Button'
import ButtonImage from '../components/ButtonImage'
import H1 from '../components/H1'
import styles from './CadastrarOutro.module.css'

function CadastrarOutro() {
  return (
    <div className={styles.container}>
      <H1 text="Pronto!Cadastrado" />
      <div className={styles.buttonPosition}>
        <Button type="button" value="Cancelar" url="/" />
        <Button type="button" value="Finalizar!" url="/" />
      </div>
    </div>
  )
}

export default CadastrarOutro
