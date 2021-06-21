import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  let [login, setLogin] = useState("");

  function signin(email, history) {
    console.log("Signin login: " + email);
    setLogin(email);
    history.push("/safe");
  }

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/register">
            <Register signin={signin}/>
          </Route>

          <Route path="/login">
            <Login signin={signin}/>
          </Route>

          <Route path="/safe">
            <Safe login={login}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
