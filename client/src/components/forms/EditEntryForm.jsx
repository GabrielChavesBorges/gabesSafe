// Imports: --------------------------------------------------------------------

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import GabesTheme from '../Theme';

// Style: ----------------------------------------------------------------------

const useStyles = makeStyles({
  header: {
    color: GabesTheme.palette.primary.main,
  },
  actions: {
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    color: GabesTheme.palette.secondary.main,
    backgroundColor: GabesTheme.palette.primary.main,
    width: '100px',
    '&:hover': {
      backgroundColor: GabesTheme.palette.primary.light,
    },
  },
});

// Edit Entry Form: ------------------------------------------------------------

function EditEntryForm(props) {
  // Prop validation:
  EditEntryForm.propTypes = {
    entry: PropTypes.shape.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCloseEdit: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
  };

  // Consts: -------------------------------------------------------------------

  const classes = useStyles();
  const emptyForm = {
    _id: '',
    title: '',
    link: '',
    login: '',
    password: '',
  };
  const [entryInfo, setEntryInfo] = useState(emptyForm);
  const [passwordVisible, setPasswordVisible] = useState('password');
  const { visible } = props;

  // Functions: ----------------------------------------------------------------

  function handleChange(event) {
    const { name, value } = event.target;
    setEntryInfo((previousState) => ({ ...previousState, [name]: value }));
  }

  function handleClose() {
    props.onCloseEdit();
  }

  function handleSubmit() {
    props.onSubmit(entryInfo);
    handleClose();
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

  useEffect(() => {
    setEntryInfo(props.entry);
  }, []);

  // JSX: ----------------------------------------------------------------------

  return (
    <div>
      <Dialog
        open={visible}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.header}>Edit password</DialogTitle>

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
          <Button className={classes.button} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={classes.button} onClick={handleSubmit}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditEntryForm;
