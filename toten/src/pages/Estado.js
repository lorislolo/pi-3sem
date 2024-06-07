import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';
import styles from './Estado.module.css';

function Estado() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => setEstados(response.data))
      .catch(error => console.error('Erro ao buscar os estados:', error));
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then(response => setCidades(response.data))
        .catch(error => console.error('Erro ao buscar as cidades:', error));
    }
  }, [estadoSelecionado]);

  const handleAvancar = () => {
    navigate('/NomeIdade', {
      state: {
        estadoSelecionado,
        cidadeSelecionada
      }
    });
    console.log(estadoSelecionado, cidadeSelecionada)
  };

  return (
    <div className={styles.container}>
      <label htmlFor='estado'>Escolha seu Estado</label>
      <select
        id="estado"
        value={estadoSelecionado}
        onChange={e => setEstadoSelecionado(e.target.value)}
        name="Estado"
      >
        <option value="">Estado...</option>
        {estados.map(estado => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>

      <label htmlFor='cidade'>Escolha sua Cidade</label>
      <select
        name="Cidade"
        id="cidade"
        value={cidadeSelecionada}
        onChange={e => setCidadeSelecionada(e.target.value)}
        disabled={!estadoSelecionado}
      >
        <option value="">Cidade...</option>
        {cidades.map(cidade => (
          <option key={cidade.id} value={cidade.nome}>
            {cidade.nome}
          </option>
        ))}
      </select>

      <div className={styles.buttonPosition}>
        <Button url='/Cidade' type="button" value="Voltar" />
        <Button type="button" onClick={handleAvancar} value="Avançar" />
      </div>
    </div>
  );
}

export default Estado;
