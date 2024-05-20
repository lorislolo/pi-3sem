import Button from '../components/Button'
import styles from './QrCode.module.css'
import qrcode from '../img/qrcode.png'

function QrCode() {

    return(
        <div className={styles.container}>
            <img className={styles.img} src={qrcode} alt="" />
            <Button type='button' url='/' value='Voltar'/>
        </div>
    )
}

export default QrCode