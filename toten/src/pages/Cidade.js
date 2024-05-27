import Button from '../components/Button'
import ButtonImage from '../components/ButtonImage'
import H1 from '../components/H1'
import styles from './Cidade.module.css'

import caragua from './../img/bandeiracaraguatatuba.png'
import saopaulo from './../img/bandeirasaopaulo.png'

function Cidade () {
    return(
        <section>
        <H1 text="De onde você é?" />
        <div className={styles.container}>
          <div className={styles.item}>
            <ButtonImage url="/Estado" image={caragua} className={styles.button} />
            <H1 text="Caraguatatuba" />
          </div>
          <div className={styles.item}>
            <ButtonImage url="/Estado" image={saopaulo} className={styles.button} />
            <H1 text="Outro" />
          </div>
        </div>
      </section>
    )
}

export default Cidade