import Button from '../components/Button'
import styles from './Estado.module.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Estado() {
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                const estados = response.data;
                setEstados(estados);
            })
            .catch(error => {
                console.error('Erro ao buscar os estados:', error);
            });
    }, []);

    useEffect(() => {
        if (estadoSelecionado) {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
                .then(response => {
                    const cidades = response.data;
                    setCidades(cidades);
                })
                .catch(error => {
                    console.error('Erro ao buscar as cidades:', error);
                });
        }
    }, [estadoSelecionado]);
    return (
        <div className={styles.container}>
            <label htmlFor='Estado'>Escolha seu Estado</label>
            <select
                id="estado"
                value={estadoSelecionado}
                onChange={e => setEstadoSelecionado(e.target.value)}
                name="Estado">
                <option value="">Estado...</option>
                {estados.map(estado => (
                    <option key={estado.id} value={estado.sigla}>
                        {estado.nome}
                    </option>
                ))}
            </select>

            <label htmlFor='Cidade'>Esolha sua Cidade</label>
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
                <Button url='/NomeIdade' type="button" value="Avançar" />
            </div>
        </div>
    )
}

export default Estado
