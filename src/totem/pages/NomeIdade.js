import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useAxios from '../../auth/lib/useAxios'
import Button from '../components/Button'
import FormInput from '../components/FormInput'
import ButtonImage from '../components/ButtonImage'
import H1 from '../components/H1'
import styles from './NomeIdade.module.css'
import man from '../img/man.png'
import woman from '../img/womam.png'
import other from '../img/other.png'

function NomeIdade() {
  const [nome, setNome] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [sexo, setSexo] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { estadoSelecionado, cidadeSelecionada } = location.state || {}

  const axios = useAxios()

  const handleSexoClick = (sexoSelecionado) => {
    setSexo(sexoSelecionado)
  }

  const handleSubmit = async () => {
    const usuario = {
      nome,
      nascimento: new Date(nascimento),
      sexo,
      cidade: location.state.cidadeSelecionada,
      estado: location.state.estadoSelecionado,
    }

    try {
      const response = await axios.post(`/toten/visita`, usuario)
      navigate('/CadastrarOutro', {
        state: { nome: response?.data?.usuarioParcial?.nome },
      })
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      alert('Erro ao criar usuário, tente novamente')
      navigate('/')
    }
  }

  return (
    <div className={styles.container}>
      <p>Estado: {estadoSelecionado}</p>
      <p>Cidade: {cidadeSelecionada}</p>
      <FormInput
        id="Nome"
        text="Digite seu Nome"
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <FormInput
        id="Nascimento"
        text="Data de Nascimento"
        type="date"
        placeholder="Data de Nascimento"
        value={nascimento}
        onChange={(e) => setNascimento(e.target.value)}
      />

      <div className={styles.genderContainer}>
        <div
          className={`${styles.genderItem} ${sexo === 'M' ? styles.selected : ''}`}
          onClick={() => handleSexoClick('M')}
        >
          <ButtonImage image={man} />
          <H1 text="Masculino" />
        </div>
        <div
          className={`${styles.genderItem} ${sexo === 'F' ? styles.selected : ''}`}
          onClick={() => handleSexoClick('F')}
        >
          <ButtonImage image={woman} />
          <H1 text="Feminino" />
        </div>
        <div
          className={`${styles.genderItem} ${sexo === 'O' ? styles.selected : ''}`}
          onClick={() => handleSexoClick('O')}
        >
          <ButtonImage image={other} />
          <H1 text="Outros" />
        </div>
      </div>

      <div className={styles.buttonPosition}>
        <Button type="button" value="Voltar" url="/Estado" />
        <Button type="button" onClick={handleSubmit} value="Concluído" />
      </div>
    </div>
  )
}

export default NomeIdade
