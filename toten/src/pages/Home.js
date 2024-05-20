import Button from '../components/Button'
import H1 from '../components/H1'
import styles from './Home.module.css'

function Home () {
    return(
    <section>
            <H1 text='Bem Vindo'/>
        <div>
            <Button url='/passo2' type='button' value='Entrar'/>
            <Button url='/QrCode'type='button' value='QR CODE'/>
        </div>

    </section>
    )
}

export default Home