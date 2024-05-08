import Button from '../components/Button'
import H1 from '../components/H1'
import styles from './Home.module.css'

function Home () {
    return(
    <section>
            <H1/>
        <div>
            <Button type='button' value='Entrar'/>
            <Button type='button' value='QR CODE'/>
        </div>

    </section>
    )
}

export default Home