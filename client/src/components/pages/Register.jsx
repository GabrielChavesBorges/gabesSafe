import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SERVER_URL from '../../environmentVariables';

function Register(props) {
  Register.propTypes = {
    signin: PropTypes.func.isRequired,
  };

  const history = useHistory();
  const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;
  const emptyRegistration = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  const [registration, setRegistration] = useState(emptyRegistration);
  const [notification, setNotification] = useState('');

  function updateRegistration(event) {
    const { name, value } = event.target;
    setRegistration((previousState) => ({ ...previousState, [name]: value }));
  }

  function register(event) {
    // If any of the fields are empty.
    if (registration.email === ''
      || registration.password === ''
      || registration.passwordConfirmation === '') {
      setNotification('Please fill out all fields.');
      // If email field does not contain valid email.
    } else if (!emailValidation.test(registration.email)) {
      setNotification('Invalid email.');
      setRegistration(emptyRegistration);
      // If password and password confirmation are different.
    } else if (registration.password !== registration.passwordConfirmation) {
      setNotification('Passwords don\'t match.');
      setRegistration(emptyRegistration);
    } else {
      // Send registration to server.
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
          setNotification(data);
          setRegistration(emptyRegistration);
        } else if (data === 'User created.') {
          setNotification(data);
          props.signin(registration.email, history);
        } else {
          setNotification('Error, please try again.');
          setRegistration(emptyRegistration);
        }
      });
    }

    event.preventDefault();
  }

  return (
    <div>
      <h1>Register</h1>

      <form>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={registration.email}
          onChange={updateRegistration}
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          value={registration.password}
          onChange={updateRegistration}
        />

        <input
          name="passwordConfirmation"
          placeholder="Confirm your password"
          type="password"
          value={registration.passwordConfirmation}
          onChange={updateRegistration}
        />

        <button type="button" onClick={register}>Register</button>
      </form>

      <p>{notification}</p>
    </div>
  );
}

export default Register;
