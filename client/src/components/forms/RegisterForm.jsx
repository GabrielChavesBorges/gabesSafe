import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import SERVER_URL from '../../environmentVariables';
import GabesTheme from '../Theme';

// Style: ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    textAlign: 'center',
    marginTop: '50px',
    borderStyle: 'solid',
    borderColor: GabesTheme.palette.primary.main,
    borderWidth: 'medium',
    borderRadius: '5%',
    backgroundColor: GabesTheme.palette.secondary.main,
    display: 'inline-block',
    padding: '10px 20px 30px',
  },
  button: {
    marginTop: '15px',
  },
  header: {
    color: GabesTheme.palette.primary.main,
  },
}));

function RegisterForm(props) {
  // Constants: ----------------------------------------------------------------

  const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;
  const history = useHistory();
  // Hooks:
  const emptyRegistration = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  const [registration, setRegistration] = useState(emptyRegistration);
  const inputErrorInitializer = {
    email: false,
    password: false,
    passwordConfirmation: false,
  };
  const [inputError, setInputError] = useState(inputErrorInitializer);
  const errorMessageInitializer = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  const [errorMessage, setErrorMessage] = useState(errorMessageInitializer);
  const [passwordVisible, setPasswordVisible] = useState('password');
  // Props validation
  RegisterForm.propTypes = {
    onRegister: PropTypes.func.isRequired,
  };
  // Style
  const classes = useStyles();

  // Functions: ----------------------------------------------------------------
  function updateRegistration(event) {
    const { name, value } = event.target;
    setRegistration((previousState) => ({ ...previousState, [name]: value }));
  }

  function showError(field, message) {
    setInputError((previousState) => ({ ...previousState, [field]: true }));
    setErrorMessage((previousState) => ({ ...previousState, [field]: message }));
  }

  function resetErrors() {
    setInputError(inputErrorInitializer);
    setErrorMessage(errorMessageInitializer);
  }

  function registrationIsValid() {
    resetErrors();
    // If any of the fields are empty.
    if (registration.email === '') {
      showError('email', 'Please enter an email');
      return false;
    }
    if (registration.password === '') {
      showError('password', 'Please enter a password');
      return false;
    }
    if (registration.passwordConfirmation === '') {
      const blankConfirmationError = 'Please enter the password confirmation';
      showError('passwordConfirmation', blankConfirmationError);
      return false;
      // If email field does not contain valid email.
    }
    if (!emailValidation.test(registration.email)) {
      showError('email', 'Invalid email.');
      return false;
      // If password and password confirmation are different.
    }
    if (registration.password !== registration.passwordConfirmation) {
      showError('passwordConfirmation', 'Passwords don\'t match.');
      return false;
    }
    // If it passed all validation tests:
    return true;
  }

  function register(event) {
    if (registrationIsValid()) {
      fetch(`${SERVER_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: registration.email,
          password: registration.password,
        }),
      }).then((response) => response.text()).then((data) => {
        if (data === 'User already exists.') {
          showError('email', data);
        } else if (data === 'User created.') {
          props.onRegister(registration.email, history);
        } else {
          showError('email', 'Error: please try again.');
          setRegistration(emptyRegistration);
        }
      });
    }
    event.preventDefault();
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

  // Jsx: ----------------------------------------------------------------------
  return (
    <form className={classes.form}>
      <h1 className={classes.header}>Register</h1>
      <div>
        <TextField
          className="loginInput"
          required
          name="email"
          type="email"
          variant="outlined"
          label={inputError.email ? 'Error' : 'Email'}
          error={inputError.email}
          helperText={errorMessage.email}
          value={registration.email}
          autoComplete="off"
          onChange={updateRegistration}
        />
      </div>

      <div>
        <TextField
          required
          name="password"
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
          variant="outlined"
          label={inputError.password ? 'Error' : 'Password'}
          error={inputError.password}
          helperText={errorMessage.password}
          value={registration.password}
          onChange={updateRegistration}
        />
      </div>

      <div>
        <TextField
          required
          name="passwordConfirmation"
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
          variant="outlined"
          label={inputError.passwordConfirmation ? 'Error' : 'Confirm Password'}
          error={inputError.passwordConfirmation}
          helperText={errorMessage.passwordConfirmation}
          value={registration.passwordConfirmation}
          onChange={updateRegistration}
        />
      </div>

      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="primary"
        type="button"
        onClick={register}
      >
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
