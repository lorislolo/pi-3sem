import { CCardBody, CCard, CCardHeader, CCol, CRow, CTable, CButton, CPagination, CPaginationItem } from "@coreui/react";
import { useRef, useEffect } from "react";
import $ from 'jquery';
import 'datatables.net-bs5';

const data = [
    { id: 1, name: 'Clemerson', cpf: '123.456.789-10', email: "email@email.com", role: 'Administrador' },
    { id: 2, name: 'Maria', cpf: '987.654.321-01', email: "maria@email.com", role: 'Toten' },
    { id: 3, name: 'João', cpf: '456.789.123-45', email: "joao@email.com", role: 'Administrador' },
    { id: 4, name: 'Lucas', cpf: '135.792.468-10', email: "lucas@email.com", role: 'Toten' },
    { id: 5, name: 'Ana', cpf: '246.801.357-92', email: "ana@email.com", role: 'Administrador' },
    { id: 6, name: 'Pedro', cpf: '369.258.147-25', email: "pedro@email.com", role: 'Toten' },
    { id: 7, name: 'Carla', cpf: '789.123.456-30', email: "carla@email.com", role: 'Administrador' },
    { id: 8, name: 'Mateus', cpf: '159.357.258-84', email: "mateus@email.com", role: 'Toten' },
    { id: 9, name: 'Mariana', cpf: '753.951.462-78', email: "mariana@email.com", role: 'Administrador' },
    { id: 10, name: 'Paulo', cpf: '852.963.741-36', email: "paulo@email.com", role: 'Toten' },
    { id: 11, name: 'Roberto', cpf: '147.258.369-47', email: "roberto@email.com", role: 'Administrador' },
    { id: 12, name: 'Juliana', cpf: '258.369.147-58', email: "juliana@email.com", role: 'Toten' },
    { id: 13, name: 'Fernanda', cpf: '369.741.852-69', email: "fernanda@email.com", role: 'Administrador' },
    { id: 14, name: 'Guilherme', cpf: '951.753.456-70', email: "guilherme@email.com", role: 'Toten' },
    { id: 15, name: 'Patrícia', cpf: '753.159.246-81', email: "patricia@email.com", role: 'Administrador' },
    { id: 16, name: 'Rafael', cpf: '369.852.147-92', email: "rafael@email.com", role: 'Toten' },
    { id: 17, name: 'Camila', cpf: '258.951.357-03', email: "camila@email.com", role: 'Administrador' },
    { id: 18, name: 'Rodrigo', cpf: '951.357.258-14', email: "rodrigo@email.com", role: 'Toten' },
    { id: 19, name: 'Aline', cpf: '357.258.159-25', email: "aline@email.com", role: 'Administrador' },
    { id: 20, name: 'Daniel', cpf: '258.147.369-36', email: "daniel@email.com", role: 'Toten' },
    { id: 21, name: 'Marcos', cpf: '258.369.147-47', email: "marcos@email.com", role: 'Administrador' },
    { id: 22, name: 'Luana', cpf: '147.369.258-58', email: "luana@email.com", role: 'Toten' },
    { id: 23, name: 'Fábio', cpf: '369.147.258-69', email: "fabio@email.com", role: 'Administrador' },
    { id: 24, name: 'André', cpf: '369.258.147-70', email: "andre@email.com", role: 'Toten' },
    { id: 25, name: 'Vanessa', cpf: '258.147.369-81', email: "vanessa@email.com", role: 'Administrador' },
    { id: 26, name: 'Gabriel', cpf: '369.258.147-92', email: "gabriel@email.com", role: 'Toten' },
    { id: 27, name: 'Renata', cpf: '258.369.147-03', email: "renata@email.com", role: 'Administrador' },
    { id: 28, name: 'Thiago', cpf: '369.147.258-14', email: "thiago@email.com", role: 'Toten' },
    { id: 29, name: 'Carolina', cpf: '258.147.369-25', email: "carolina@email.com", role: 'Administrador' },
    { id: 30, name: 'Luciana', cpf: '369.258.147-36', email: "luciana@email.com", role: 'Toten' }
]


function CatalogoTable() {
    const tableRef = useRef(null);
    useEffect(() => {
        // Inicializar o DataTable
        $(tableRef.current).DataTable({
            "language": {
                "url": "//cdn.datatables.net/plug-ins/2.0.7/i18n/pt-BR.json" // Idioma
            },
        });

        // Preencher a tabela com os dados
        const table = $(tableRef.current).DataTable();
        data.forEach(element => {
            table.row.add([element.id, element.name, element.cpf, element.email, element.role]).draw();
        });

        return () => {
            // Limpar o DataTable quando o componente for desmontado
            table.destroy();
        };
    }, []);

    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Catalogo</strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Catalogo</span>
                            <CButton color="primary" size="m" href="/catalogo/cadastro">Cadastrar</CButton>
                        </div>
                        <table ref={tableRef} className="table table-striped table-hover" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome Popular</th>
                                    <th>Nome Cientifico</th>
                                    <th>Descrição</th>
                                    <th>Funçãos</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default CatalogoTable;