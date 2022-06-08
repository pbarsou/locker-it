import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  /*const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.title,
    cost: props.cost,
    category: props.category,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  }; */

  const handleChangeValues = (value) => {
    props.setValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleRegisterClient = () => {
    props.setListClient([
      ...props.listClient,
      {
        name: props.values.name,
        email: props.values.email,
        contact: props.values.contact,
      },
    ]);
    // console.log(props.listClient);
    handleClose();
    console.log(props.values.name)
  }

  function handleClose() {
    props.setOpen(false);
  };

  /*const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id == editValues.id
            ? {
                id: editValues.id,
                name: editValues.name,
                cost: editValues.cost,
                category: editValues.category,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  }; */

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
            //defaultValue={props.title}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            //defaultValue={props.cost}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contato"
            //defaultValue={props.category}
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
            //defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            //defaultValue={props.values.name}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            //defaultValue={props.values.email}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contato"
            //defaultValue={props.contact}
            type="text"
            fullWidth
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
      )}
    </div>
  );
}