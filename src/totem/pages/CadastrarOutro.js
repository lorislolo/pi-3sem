import { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ButtonImage from '../components/ButtonImage'
import H1 from '../components/H1'
import styles from './CadastrarOutro.module.css'

function CadastrarOutro() {
  const nav = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      nav('/')
    }, 2000)

    return () => clearTimeout(timeout)
  }, [history])

  return (
    <div className={styles.container}>
      <H1 text="Pronto! Cadastrado" />
      <div className={styles.buttonPosition}>
        <Link to="/">
          <Button type="button" value="Finalizar!" />
        </Link>
      </div>
    </div>
  )
}

export default CadastrarOutro
