import { React } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from 'axios';

export default function FormDialog(props) {

  const handleChangeValues = (value) => {
    props.setValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleChangeEditValues = (value) => {
    props.setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleRegisterClient = () => {
    /*props.setListClient([
      ...props.listClient,
      {
        name: props.values.name,
        email: props.values.email,
        contact: props.values.contact,
      },
    ]);
    // console.log(props.listClient);
    handleClose();
    console.log(props.values.name)*/
    console.log(props.values.name);
    Axios.post("http://localhost:3333/clients", {
      name: props.values.name,
      email: props.values.email,
      contact: props.values.contact
    }).then(response => {
      console.log(response);
      handleClose();
    })
  }

  function handleClose() {
    props.setOpen(false);
  };

  const handleEditClient = () => {
    console.log(props.id)
    console.log(props.editValues)
    Axios.put(`http://localhost:3333/clients/${props.editValues.id}`, {
      name: props.editValues.name,
      email: props.editValues.email,
      contact: props.editValues.contact,
    }).then((response) => {
      console.log(response)
      })
    handleClose();
  };

  return (
    <div>
      {props.cadastro ? (
        <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Cadastrar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contato"
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleRegisterClient} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      ) : (
        <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="ID"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={props.name}
            type="text"
            fullWidth
            onChange={handleChangeEditValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            defaultValue={props.email}
            type="text"
            fullWidth
            onChange={handleChangeEditValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contato"
            defaultValue={props.contact}
            type="text"
            fullWidth
            onChange={handleChangeEditValues}
          />
          <TextField
            disabled
            autoFocus
            margin="dense"
            id="created_at"
            label="Data de Criação"
            defaultValue={props.created_at}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleEditClient} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      )}
    </div>
  );
}