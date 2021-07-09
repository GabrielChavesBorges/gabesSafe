// Imports: --------------------------------------------------------------------

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import {
  AddCircle as AddCircleIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import GabesTheme from '../Theme';

// Style: ----------------------------------------------------------------------

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
  addButtonText: {
    position: 'relative',
    bottom: '6px',
    left: '5px',
  },
  header: {
    color: GabesTheme.palette.primary.main,
  },
  actions: {
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formButton: {
    color: GabesTheme.palette.secondary.main,
    backgroundColor: GabesTheme.palette.primary.main,
    width: '100px',
    '&:hover': {
      backgroundColor: GabesTheme.palette.primary.light,
    },
  },
}));

// Add Entry Form: -------------------------------------------------------------

function AddEntryForm(props) {
  AddEntryForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Constants: ------------------------------------------------------------------

  const classes = useStyles();
  const { addToast } = useToasts();
  const emptyForm = {
    title: '',
    link: '',
    login: '',
    password: '',
  };

  const [open, setOpen] = useState(false);
  const [entryInfo, setEntryInfo] = useState(emptyForm);
  const [passwordVisible, setPasswordVisible] = useState('password');

  // Functions: ----------------------------------------------------------------

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
    const emptyFormMsg = 'Please insert some information before adding.';
    if (entryInfo.title === '' && entryInfo.link === ''
      && entryInfo.login === '' && entryInfo.password === '') {
      addToast(emptyFormMsg, { appearance: 'error' });
    } else { // Add entry
      props.onSubmit(entryInfo);
      handleClose();
    }
  }

  function handleClickShowPassword() {
    setPasswordVisible((previousState) => {
      if (previousState === 'password') {
        return 'text';
      }
      // Else:
      return 'password';
    });
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  // JSX: ----------------------------------------------------------------------

  return (
    <div>
      <Button
        className={classes.addEntryButton}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        <AddCircleIcon />
        <span className={classes.addButtonText}>Add new password</span>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.header}>Add new password</DialogTitle>
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
            type={passwordVisible}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {(passwordVisible === 'text')
                      ? <VisibilityIcon color="primary" />
                      : <VisibilityOffIcon color="primary" />}
                  </IconButton>
                </InputAdornment>),
            }}
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
        <DialogActions className={classes.actions}>
          <Button className={classes.formButton} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={classes.formButton} onClick={handleAdd}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddEntryForm;
