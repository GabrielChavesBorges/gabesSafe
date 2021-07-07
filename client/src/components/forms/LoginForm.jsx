import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    marginTop: '75px',
    marginBottom: '75px',
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

function LoginForm(props) {
  // Constants: ----------------------------------------------------------------
  const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;
  const history = useHistory();
  // Hooks:
  const emptyLogin = { email: '', password: '' };
  const [login, setLogin] = useState(emptyLogin);
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
  // Props validation
  LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
  };
  // Style
  const classes = useStyles();

  // Functions: ----------------------------------------------------------------
  function updateLogin(event) {
    const { name, value } = event.target;
    setLogin((previousState) => ({ ...previousState, [name]: value }));
  }

  function showError(field, message) {
    setInputError((previousState) => ({ ...previousState, [field]: true }));
    setErrorMessage((previousState) => ({ ...previousState, [field]: message }));
  }

  function resetErrors() {
    setInputError(inputErrorInitializer);
    setErrorMessage(errorMessageInitializer);
  }

  function loginIsValid() {
    resetErrors();
    if (login.email === '') {
      showError('email', 'Please your account email');
      return false;
    }
    if (login.password === '') {
      showError('password', 'Please enter your password');
      return false;
    }
    if (!emailValidation.test(login.email)) {
      showError('email', 'Invalid email.');
      return false;
    }
    // If it passed all validation tests:
    return true;
  }

  function attemptLogin() {
    if (loginIsValid()) {
      fetch(`${SERVER_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: login.email,
          password: login.password,
        }),
      }).then((response) => response.text()).then((data) => {
        if (data === 'User not found.') {
          showError('email', data);
        } else if (data === 'Invalid password.') {
          showError('password', data);
        } else if (data === 'Login successful.') {
          props.onLogin(login.email, history);
        } else {
          showError('email', 'Error: please try again');
        }
      });
    }
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
          value={login.email}
          onChange={updateLogin}
        />
      </div>

      <div>
        <TextField
          required
          name="password"
          type="password"
          variant="outlined"
          label={inputError.password ? 'Error' : 'Password'}
          error={inputError.password}
          helperText={errorMessage.password}
          value={login.password}
          onChange={updateLogin}
        />
      </div>

      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="primary"
        type="button"
        onClick={attemptLogin}
      >
        Register
      </Button>
    </form>
  );
}

export default LoginForm;
