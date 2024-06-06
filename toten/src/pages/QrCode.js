import Button from '../components/Button'
import styles from './QrCode.module.css'
import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';

function QrCode() {

    const [visita, setVisita] = useState('')

    useEffect(() => {
        const intervalGetVisitas = setInterval( async () => {
            try {
                const result = await fetch()
                const data = await result.json()
                setVisita(data)
            } catch (error) {
                console.error("Erro ao buscar visitas", error)
            }
        }, 1500)
    },[])

    return(
        <div className={styles.container}>
            <QRCode className={styles.img} value="qrcodetoten.com" />
            <Button type='button' url='/' value='Voltar'/>
        </div>
    )
}

export default QrCode