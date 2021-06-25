import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SERVER_URL from '../../environmentVariables';

function Login(props) {
  Login.propTypes = {
    signin: PropTypes.func.isRequired,
  };

  const history = useHistory();
  const emailValidation = /(.+)@(.+){2,}\.(.+){2,}/;
  const emptyLogin = { email: '', password: '' };
  const [notification, setNotification] = useState('');
  const [login, setLogin] = useState(emptyLogin);

  function updateLogin(event) {
    const { name, value } = event.target;
    setLogin((previousState) => ({ ...previousState, [name]: value }));
  }

  function attemptLogin(event) {
    // If there are empty fields.
    if (login.email === '' || login.password === '') {
      setNotification('Please fill out all fields.');
      // If email field is filled with invalid email.
    } else if (!emailValidation.test(login.email)) {
      setNotification('Invalid email.');
      setLogin(emptyLogin);
      // Attempt login.
    } else {
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
          setNotification(data);
          setLogin(emptyLogin);
        } else if (data === 'Invalid password.') {
          setNotification(data);
          setLogin(emptyLogin);
        } else if (data === 'Login successful.') {
          props.signin(login.email, history);
        } else {
          setLogin(emptyLogin);
        }
      });
    }

    event.preventDefault();
  }

  return (
    <div>
      <h1>Login</h1>

      <form>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={login.email}
          onChange={updateLogin}
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          value={login.password}
          onChange={updateLogin}
        />

        <button type="button" onClick={attemptLogin}>Login</button>
      </form>

      <p>{notification}</p>
    </div>
  );
}

export default Login;
