import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/safe" component={Safe}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
