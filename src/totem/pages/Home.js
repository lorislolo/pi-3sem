import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../components/Button'
import H1 from '../components/H1'
import styles from './Home.module.css'
import QRCode from 'qrcode.react'
import { useQRcode } from '../lib/qrcode'

function Home() {
  const hash = useQRcode()

  return (
    <section>
      <div className={styles.container}>
        {hash && (
          <div style={{ backgroundColor: 'white', padding: 10 }}>
            <QRCode size={300} className={styles.img} value={hash} />
          </div>
        )}
      </div>
      <H1 text="Inicie Sua Visita" />
      <div>
        <Button url="/Cidade" type="button" value="INCIAR" />
      </div>
    </section>
  )
}

export default Home
