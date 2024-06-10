import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormTextarea,
    CRow,
    CImage
} from '@coreui/react'
import useAxios from '../../../auth/lib/useAxios'

function FuncionarioCadastro() {
    const axios = useAxios()
    const navigate = useNavigate()

    const [validated, setValidated] = useState(false)
    const [nomeCientificoTxt, setNomeCientificoTxt] = useState('')
    const [nomePopularTxt, setNomePopularTxt] = useState('')
    const [descricaoTxt, setDescricaoTxt] = useState('')
    const [especieAudio, setEspecieAudio] = useState(null)
    const [estrelaNum, setEstrelaNum] = useState(5)

    const [especieFotos, setEspecieFotos] = useState('')
    const [previews, setPreviews] = useState([]);

    const handleFotoChange = (e) => {
        const files = Array.from(e.target.files);
        const newSelectedFiles = [...especieFotos, ...files];
        setEspecieFotos(newSelectedFiles);

        const newPreviews = newSelectedFiles.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews)
    };

    const handleRemoveImage = (index) => {
        const newFiles = especieFotos.filter((_, i) => i !== index);
        const newPreviews = previews.filter((_, i) => i !== index);

        setEspecieFotos(newFiles);
        setPreviews(newPreviews);
    };

    const handleAudioChange = (event) => {
        setEspecieAudio(event.target.files[0]);
    };

    const handleCreate = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('nomeCientifico', nomeCientificoTxt)
        formData.append('nomePopular', nomePopularTxt)
        formData.append('descricao', descricaoTxt)
        formData.append('estrela', estrelaNum)
        formData.append('nascimento', new Date().toISOString())
        formData.append("medalha", 1)
        formData.append('som', especieAudio)
        especieFotos.forEach(file => {
            formData.append('foto', file);
        });
        for (const entry of formData.entries()) {
            console.log(entry);
        }
        try {
            await axios.post('/catalogo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            alert('Especie cadastrada com sucesso')
            navigate('/catalogo')
        } catch (error) {
            console.log(error)
            alert('Erro ao cadastrar funcionario')
        }
        setValidated(true)
    }

    const handleTeste = async () => {
        console.log(especieFotos)
        console.log(especieAudio)
        setValidated(true)
    }
    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Cadastro de Especies</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm className="row" noValidate validated={validated} onSubmit={handleCreate} encType="multipart/form-data">
                            <CCol className="col-6 mb-2">
                                <CFormInput
                                    type="text"
                                    label="Nome Cientifico:"
                                    placeholder="Nome Cientifico"
                                    maxLength={45}
                                    onChange={(e) => setNomeCientificoTxt(e.target.value)}
                                    value={nomeCientificoTxt}
                                    required
                                />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput
                                    type="text"
                                    label="Nome Popular:"
                                    placeholder="Nome Popular"
                                    maxLength={45}
                                    onChange={(e) => setNomePopularTxt(e.target.value)}
                                    value={nomePopularTxt}
                                    required
                                />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput
                                    type="number"
                                    label="Raridade:"
                                    placeholder="Raridade da especie 0-5"
                                    min={0} max={5}
                                    onChange={(e) => setEstrelaNum(e.target.value)}
                                    value={estrelaNum}
                                    required
                                />
                            </CCol>
                            <CCol className="col-12 mb-2">
                                <CFormTextarea
                                    type="text"
                                    label="Descriçao:"
                                    placeholder="Descreva as informações da especie."
                                    rows={5}
                                    maxLength={255}
                                    text="Ate 255 caracteres"
                                    onChange={(e) => setDescricaoTxt(e.target.value)}
                                    value={descricaoTxt}
                                    required
                                />
                            </CCol>
                            <CCol className="col-12 mb-2">
                                <CFormInput
                                    type="file"
                                    label="Fotos da Especie:"
                                    accept='image/*'
                                    text="Selecione as imagens da especie. (Utilize o CTRL para selecionar mais de uma imagem)"
                                    onChange={handleFotoChange}
                                    multiple
                                />
                            </CCol>
                            {previews.length > 0 && (
                                <div className="d-flex image-preview-container overflow-auto">
                                    {previews.map((preview, index) => (
                                        <div key={index} className="image-preview-item position-relative">
                                            <CImage src={preview} height={320} className='me-2' />
                                            <div className="position-absolute top-0 m-2">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleRemoveImage(index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <CCol className="col-12 mb-2">
                                <CFormInput
                                    type="file"
                                    label="Audio da Especie:"
                                    accept='audio/*'
                                    onChange={handleAudioChange}
                                />
                            </CCol>
                            <CCol className="col-12">
                                <CButton color="secondary" size="m" className="me-2" href="/funcionario">
                                    Cancelar
                                </CButton>
                                <CButton type="submit" color="primary" size="m">
                                    Salvar
                                </CButton>
                                <CButton type="button" onClick={handleTeste} color="primary" size="m">
                                    Teste
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default FuncionarioCadastro
