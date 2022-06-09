import './App.css';
import { useEffect, useState } from "react";
import FormDialog from './components/dialog'
import Axios from 'axios';
import TableLine from './components/TableLine';

function App() {

  const [open, setOpen] = useState(false);
  const [cadastro, setCadastro] = useState()
  const [values, setValues] = useState();
  const [listClient, setListClient] = useState([]);

  function handleClickInclude() {
    setCadastro(true);
    setOpen(true);
  }

  useEffect(() => {
    Axios.get("http://localhost:3333/clients").then(response => {
      setListClient(response.data);
    });
  }, [])

  return (
    <>
    <FormDialog open={open} setOpen={setOpen} cadastro={cadastro} values={values} setValues={setValues} listClient={listClient} setListClient={setListClient}/>
    <div className="app-container">
      <div className="header">
        <span>Cadastro de Clientes</span>
        <button onClick={() => handleClickInclude()} className="button">Incluir</button>
      </div>

      <div className="div-table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Contato</th>
              <th>Data de Criação</th>
              <th className="acao">Editar</th>
              <th className="acao">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {listClient.length !== 0 ? (
              listClient.map((value) => (
                <TableLine key={value.id}
                listClient={listClient}
                setListClient={setListClient}
                setOpen={setOpen}
                cadastro={cadastro}
                setCadastro={setCadastro}
                id={value.id}
                name={value.name}
                email={value.email}
                contact={value.contact}
                created_at={value.created_at}
                />
                /*<tr>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.contact}</td>
                <td>{value.created_at}</td>
                <td className="table-button-image" onClick={handleClickEdit}><AiOutlineEdit size={23}/></td>
                <td className="table-button-image"><BsTrash size={18}/></td>
              </tr>*/
              ))
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
    </>
  );
}

export default App;
