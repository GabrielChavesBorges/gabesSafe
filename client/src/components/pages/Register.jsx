import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import RegisterForm from '../forms/RegisterForm';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
}));

function Register(props) {
  const classes = useStyles();

  Register.propTypes = {
    signin: PropTypes.func.isRequired,
  };

  function register(user, history) {
    props.signin(user, history);
  }

  return (
    <div className={classes.root}>
      <RegisterForm onRegister={register} />
    </div>
  );
}

export default Register;
