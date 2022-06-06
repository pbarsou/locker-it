import './App.css';
import { useState } from "react";
import FormDialog from './components/dialog'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

function App() {

  const [open, setOpen] = useState(false);
  const [cadastro, setCadastro] = useState(false)
  const [values, setValues] = useState();
  const [listClient, setListClient] = useState([]);

  const handleClickInclude = () => {
    setCadastro(true);
    setOpen(true);
  }

  const handleClickEdit = () => {
    setCadastro(false);
    setOpen(true);
  }

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
              <th className="acao">Editar</th>
              <th className="acao">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {listClient.length !== 0 ? (
              listClient.map((value) => (
                <tr>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.contact}</td>
                <td className="table-button-image" onClick={handleClickEdit}><AiOutlineEdit size={23}/></td>
                <td className="table-button-image"><BsTrash size={18}/></td>
              </tr>
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
