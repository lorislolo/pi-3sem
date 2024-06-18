import { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ButtonImage from '../components/ButtonImage'
import H1 from '../components/H1'
import styles from './CadastrarOutro.module.css'

function CadastrarOutro(a) {
  const nav = useNavigate()
  const { state } = useLocation()
  useEffect(() => {
    const timeout = setTimeout(() => {
      nav('/')
    }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={styles.container}>
      <H1 text="Cadastro finalizado" />
      <h2 style={{ color: 'white' }}>
        Bem-vindo <u>{state?.nome}</u>! O cadastro foi finalizado com sucesso.
      </h2>
    </div>
  )
}

export default CadastrarOutro
