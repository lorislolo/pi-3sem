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
  CSpinner,
} from '@coreui/react'
import useAxios from '../../../auth/lib/useAxios'

function CatalogoCadastro() {
  const axios = useAxios()
  const navigate = useNavigate()

  const handleCreate = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    try {
      await axios.post('/catalogo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      alert('Especie cadastrada com sucesso')
      navigate('/catalogo')
    } catch (error) {
      console.log(error)
      alert('Erro ao cadastrar especie.')
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
              onSubmit={handleCreate}
              encType="multipart/form-data"
            >
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="text"
                  label="Nome Popular:"
                  placeholder="Nome Popular"
                  name="nomePopular"
                  maxLength={45}
                  required
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="text"
                  label="especie:"
                  placeholder="especie"
                  name="especie"
                  maxLength={45}
                  required
                />
              </CCol>
              <CCol className="col-12 mb-2">
                <CFormInput
                  type="text"
                  label="Nome Cientifico:"
                  placeholder="Nome Cientifico"
                  name="nomeCientifico"
                  maxLength={45}
                  required
                />
              </CCol>

              <CCol className="col-12 mb-2">
                <CFormTextarea
                  type="text"
                  label="Descriçao:"
                  placeholder="Descreva as informações da especie."
                  rows={5}
                  name="descricao"
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
                <CFormInput type="file" label="Modelo:" name="ftModel" accept="image/*" />
              </CCol>

              <CCol className="col-6 mb-5">
                <CFormInput type="file" name="som" label="Audio da Especie:" accept="audio/*" />
              </CCol>

              <CCol className="col-12">
                <CButton color="secondary" className="me-2" href="/funcionario">
                  Cancelar
                </CButton>
                <CButton type="submit" color="primary" disabled={axios.isLoading}>
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

export default CatalogoCadastro
