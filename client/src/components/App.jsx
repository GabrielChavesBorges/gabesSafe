import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Safe from "./pages/Safe";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/safe" component={Safe}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
