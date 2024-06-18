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
  CSpinner,
} from '@coreui/react'
import useAxios from '../../../auth/lib/useAxios'

function CatalogoEditar() {
  const axios = useAxios()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  const uuid = window.location.pathname.split('/').pop()
  useEffect(() => {
    axios.get(`/catalogo/${uuid}`).then(({ data }) => {
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
            <strong>Editar de Especie</strong>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row"
              noValidate
              // validated={validated}
              onSubmit={handleUpdate}
              encType="multipart/form-data"
            >
              <CCol className="col-12 mb-2">
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
                  type="text"
                  label="Especie:"
                  placeholder="especie"
                  name="especie"
                  value={formData.especie}
                  onChange={(e) => setFormData({ ...formData, especie: e.target.value })}
                  maxLength={45}
                  required
                />
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
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="file"
                  label="Fotos da Especie:"
                  name="catalogoGaleria"
                  accept="image/*"
                  text="Selecione as imagens da especie. (Utilize o CTRL para selecionar mais de uma imagem)"
                  multiple
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput type="file" label="Medalha:" name="medalha" accept="image/*" />
              </CCol>

              <CCol className="col-6 mb-2">
                <CFormInput type="file" label="Modelo:" name="ftMOdel" accept="image/*" />
              </CCol>

              <CCol className="col-6 mb-2">
                <CFormInput type="file" name="som" label="Audio da Especie:" accept="audio/*" />
              </CCol>
              <CCol className="col-12 mt-3">
                <CButton color="secondary" className="me-2" href="/catalogo">
                  Cancelar
                </CButton>
                <CButton type="submit" color="primary" size="m">
                  {axios.isLoading ? 'aguarde' : 'Salvar'}
                  {axios.isLoading && <CSpinner className="ms-3" color="warning" size="sm" />}
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
