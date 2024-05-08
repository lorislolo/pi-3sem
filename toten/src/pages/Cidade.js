import Button from '../components/Button'
import ButtonImage from '../components/ButtonImage'
import H1 from '../components/H1'
import styles from './Cidade.module.css'

import caragua from './../img/bandeiracaraguatatuba.png'
import saopaulo from './../img/bandeirasaopaulo.png'

function Cidade () {
    return(
    <section>
            <H1 text="De Onde Você é?"/>
        <div>
            <ButtonImage image={caragua}/>
            <ButtonImage image={saopaulo}/>
        </div>

    </section>
    )
}

export default Cidade