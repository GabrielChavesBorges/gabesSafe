import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '../forms/LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    minHeight: '430px',
    height: '86vh',
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
    },
  },
}));

function Login(props) {
  const classes = useStyles();

  Login.propTypes = {
    signin: PropTypes.func.isRequired,
  };

  function login(user, history) {
    props.signin(user, history);
  }

  return (
    <div className={classes.root}>
      <LoginForm onLogin={login} />
    </div>
  );
}

export default Login;
