import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GabesTheme from '../Theme';

const useStyles = makeStyles(() => ({
  addEntryButton: {
    display: 'block',
    margin: '40px auto',
    width: '250px',
    height: '70px',
    '&:hover': {
      backgroundColor: '#F9F9F9',
      borderColor: GabesTheme.palette.primary.dark,
    },
  },
  buttonText: {
    position: 'relative',
    bottom: '6px',
    left: '5px',
  },
}));

function AddEntryForm(props) {
  AddEntryForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  const classes = useStyles();
  const emptyForm = {
    title: '',
    link: '',
    login: '',
    password: '',
  };

  const [open, setOpen] = useState(false);
  const [entryInfo, setEntryInfo] = useState(emptyForm);
  const [notification, setNotification] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setEntryInfo((previousState) => ({ ...previousState, [name]: value }));
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setEntryInfo(emptyForm);
    setOpen(false);
  }

  function handleAdd() {
    // Check if all fields are blank
    if (entryInfo.title === '' && entryInfo.link === ''
      && entryInfo.login === '' && entryInfo.password === '') {
      setNotification('Please insert some information before adding.');
    } else { // Add entry
      props.onSubmit(entryInfo);
      handleClose();
    }
  }

  return (
    <div>
      <Button
        className={classes.addEntryButton}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        <AddCircleIcon />
        <span className={classes.buttonText}>Add new password</span>
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
