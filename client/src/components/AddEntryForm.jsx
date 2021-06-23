import React, { useState } from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} 
  from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

 function AddEntryForm(props) {
  const emptyForm = {
    title: "",
    link: "",
    login: "",
    password: ""
  };

  let [open, setOpen] = useState(false);
  let [entryInfo, setEntryInfo] = useState(emptyForm);
  let [notification, setNotification] = useState(""); 

  function handleChange (event) {
    const {name, value} = event.target;
    setEntryInfo((previousState) => ({...previousState, [name]: value}));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setEntryInfo(emptyForm);
    setOpen(false);
  };

  function handleAdd () {
    // Check if all fields are blank
    if(entryInfo.title === "" && entryInfo.link === "" && 
      entryInfo.login === "" && entryInfo.password === "") {
      setNotification("Please insert some information before adding.");
    } else { // Add entry
      props.onSubmit(entryInfo);
      handleClose();
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <p><AddCircleIcon /> Add new password</p>
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            name="title"
            autoComplete="off"
            type="text"
            onChange={handleChange}
            value={entryInfo.title}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="userName"
            label="Login"
            name="login"
            autoComplete="off"
            type="text"
            onChange={handleChange}
            value={entryInfo.login}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="password"
            label="Password"
            name="password"
            autoComplete="off"
            type="password"
            onChange={handleChange}
            value={entryInfo.password}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="link"
            label="Website link"
            name="link"
            autoComplete="off"
            type="url"
            onChange={handleChange}
            value={entryInfo.link}
            fullWidth
          />
        </DialogContent>
        <p>{notification}</p>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddEntryForm;