import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
