import { CCardBody, CCard, CCardHeader, CCol, CRow, CButton } from "@coreui/react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import $ from 'jquery';
import 'datatables.net-bs5';
import { useCookies } from "react-cookie";

function FuncionarioTable() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const tableRef = useRef(null);
    useEffect(() => {
        $.ajax({
            url: 'https://pj3-backend.onrender.com/funcionario/',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', `Bearer ${cookies.token || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOiJBRE0iLCJpYXQiOjE3MTc4NDcxMjEsImV4cCI6MTcxNzg0NzMwMTB9.txJhX518g7ZVBHRR7g_yUlJ1Yr5l0LSPRR6SeJC346k"}`)
            },
            success: function (response) {
                var funcionarios = response.funcionario;

                // Configurando o DataTables para exibir os dados dos funcionários
                const table = $(tableRef.current).DataTable({
                    data: funcionarios,
                    columns: [
                        { data: 'id', title: '#' },
                        { data: 'nome', title: 'Nome' },
                        { data: 'email', title: 'Email' },
                        { data: 'cpf', title: 'CPF' },
                        { data: 'roles', title: 'Função' },
                        {
                            data: 'id', title: 'Ações', createdCell: function (td, cellData, rowData, row, col) {
                                console.log(td, cellData, rowData, row, col);
                                const root = createRoot(td);
                                root.render(
                                    <div className="d-flex">
                                        <CButton color="primary" onClick={() => navigate(`/funcionario/editar/${cellData}`)}>Editar</CButton>
                                        <CButton color="secondary" onClick={() => navigate(`/funcionario/excluir/${cellData}`)}>Excluir</CButton>
                                    </div>);
                            }
                        }
                    ],
                    createdRow: function (row, data, dataIndex) {
                        // Adicionando a classe 'align-middle' a todas as células
                        $(row).children('td').addClass('align-middle');
                    }
                });
            }
        })
    }, [cookies.token]);

    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Funcionario</strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Lista de Funcionario</span>
                            <CButton color="primary" onClick={() => navigate('/funcionario/cadastro')}>Cadastrar</CButton>
                        </div>
                        <table ref={tableRef} className="table table-striped table-hover align-items-center" style={{ width: '100%' }}>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default FuncionarioTable;
