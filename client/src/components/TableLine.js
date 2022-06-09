import { React, useState } from "react";
import FormDialog from './dialog'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import Axios from 'axios';

export default function TableLine(props) {

  const [open, setOpen] = useState(false);
  const [editValues, setEditValues] = useState();

  const handleClickEdit = () => {
    props.setCadastro(false);
    setOpen(true);
    setEditValues({
      id: props.id,
      name: props.name,
      email: props.email,
      contact: props.contact,
    });
    console.log(props.id)
  }

  const handleDeleteClient = () => {
    Axios.delete(`http://localhost:3333/clients/${props.id}`).then(() => {
      props.setListClient(
        props.listClient.filter((value) => {
          return value.id !== props.id;
        })
      );
    });
  }; 

  return(
    <>
    <FormDialog 
    open={open} 
    setOpen={setOpen} 
    cadastro={props.cadastro} 
    id={props.id} 
    name={props.name} 
    email={props.email} 
    contact={props.contact} 
    created_at={props.created_at}
    listClient={props.listClient} 
    setListClient={props.setListClient} 
    editValues={editValues}
    setEditValues={setEditValues}
    />
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.contact}</td>
      <td>{props.created_at}</td>
      <td className="table-button-image" onClick={handleClickEdit}><AiOutlineEdit size={23} /></td>
      <td className="table-button-image" onClick={handleDeleteClient}><BsTrash size={18} /></td>
    </tr>
    </>
  )
}