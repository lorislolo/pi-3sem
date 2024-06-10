import { useState, useEffect } from 'react'
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
    CImage,
} from '@coreui/react'
import useAxios from '../../../auth/lib/useAxios'

function CatalogoEditar() {
    const axios = useAxios()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})

    const uuid = window.location.pathname.split('/').pop()
    useEffect(() => {
        axios.get(`/catalogo/${uuid}`).then(({ data }) => {
            data.cata.nascimento = data.cata.nascimento.split('T')[0]
            setFormData(data.cata)
        })
    }, [])
    const handleUpdate = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        try {
            await axios.put(`/catalogo/${uuid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            alert('Especie editada com sucesso')
            navigate('/catalogo')
        } catch (error) {
            console.log(error.response.data)
            alert('Erro ao editar especie')
        }
        // setValidated(true)
    }

    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Cadastro de Especies</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm
                            className="row"
                            noValidate
                            // validated={validated}
                            onSubmit={handleUpdate}
                            encType="multipart/form-data"
                        >
                            <CCol className="col-6 mb-2">
                                <CFormInput
                                    type="text"
                                    label="Nome Cientifico:"
                                    placeholder="Nome Cientifico"
                                    name="nomeCientifico"
                                    value={formData.nomeCientifico}
                                    onChange={(e) => setFormData({ ...formData, nomeCientifico: e.target.value })}
                                    maxLength={45}
                                    required
                                />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput
                                    type="text"
                                    label="Nome Popular:"
                                    placeholder="Nome Popular"
                                    name="nomePopular"
                                    value={formData.nomePopular}
                                    onChange={(e) => setFormData({ ...formData, nomePopular: e.target.value })}
                                    maxLength={45}
                                    required
                                />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput
                                    type="number"
                                    label="Raridade:"
                                    name="estrela"
                                    placeholder="Raridade da especie 0-5"
                                    value={formData.estrela}
                                    onChange={(e) => setFormData({ ...formData, estrela: e.target.value })}
                                    min={0}
                                    max={5}
                                    required
                                />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput
                                    type="date"
                                    label="Nascimento:"
                                    name="nascimento"
                                    value={formData.nascimento}
                                    onChange={(e) => setFormData({ ...formData, nascimento: e.target.value })}
                                    required />
                            </CCol>
                            <CCol className="col-12 mb-2">
                                <CFormTextarea
                                    type="text"
                                    label="Descriçao:"
                                    placeholder="Descreva as informações da especie."
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                                    rows={5}
                                    maxLength={255}
                                    text="Ate 255 caracteres"
                                    required
                                />
                            </CCol>
                            <CCol className="col-12 mb-2">
                                <CFormInput
                                    type="file"
                                    label="Fotos da Especie:"
                                    name="catalogoGaleria"
                                    accept="image/*"
                                    text="Selecione as imagens da especie. (Utilize o CTRL para selecionar mais de uma imagem)"
                                    multiple
                                />
                            </CCol>
                            <CCol className="col-12 mb-2">
                                <CFormInput
                                    type="file"
                                    label="Medalha:"
                                    name="medalha"
                                    accept="image/*"
                                />
                            </CCol>
                            {/* Talvez adicionar || Preview das Imagens antes de enviar o formulario */}
                            {/* {previews.length > 0 && (
                                <div className="d-flex image-preview-container overflow-auto">
                                    {previews.map((preview, index) => (
                                        <div key={index} className="image-preview-item position-relative">
                                            <CImage src={preview} height={320} className="me-2" />
                                            <div className="position-absolute top-0 m-2">
                                                <button className="btn btn-danger" onClick={() => handleRemoveImage(index)}>
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )} */}
                            <CCol className="col-12 mb-2">
                                <CFormInput
                                    type="file"
                                    name="som"
                                    label="Audio da Especie:"
                                    accept="audio/*"
                                />
                            </CCol>
                            <CCol className="col-12">
                                <CButton color="secondary" size="m" className="me-2" href="/funcionario">
                                    Cancelar
                                </CButton>
                                <CButton type="submit" color="primary" size="m">
                                    Salvar
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CatalogoEditar
