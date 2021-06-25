import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton,
} from '@material-ui/core';

function EditEntryForm(props) {
  EditEntryForm.propTypes = {
    entry: PropTypes.shape.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  const emptyForm = {
    _id: '',
    title: '',
    link: '',
    login: '',
    password: '',
  };
  const [entryInfo, setEntryInfo] = useState(emptyForm);
  const [open, setOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setEntryInfo((previousState) => ({ ...previousState, [name]: value }));
  }

  function handleClickOpen() {
    setEntryInfo(props.entry);
    setOpen(true);
  }

  function handleClose() {
    setEntryInfo(emptyForm);
    setOpen(false);
  }

  function handleSubmit() {
    props.onSubmit(entryInfo);
    handleClose();
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit password</DialogTitle>

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

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditEntryForm;
