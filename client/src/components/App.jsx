import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Safe from './pages/Safe';
import Header from './Header';
import Footer from './Footer';
import GabesTheme from './Theme';

function App() {
  const [login, setLogin] = useState('');

  function signin(email, history) {
    setLogin(email);
    history.push('/safe');
  }

  return (
    <ThemeProvider theme={GabesTheme}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/register">
              <Register signin={signin} />
            </Route>

            <Route path="/login">
              <Login signin={signin} />
            </Route>

            <Route path="/safe">
              <Safe login={login} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
