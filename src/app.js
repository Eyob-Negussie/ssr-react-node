import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import './styles/App.css';
import Header from "./pages/header";
import Profile from "./pages/profile";
import Password from "./pages/password";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/profile" render={props => <Profile {...props} />} />
          <Route path="/password" render={props => <Password {...props} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
