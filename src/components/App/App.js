import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
//import Footer from "../Footer/Footer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Woof Match</h1>
      <Header></Header>
      <Route exact path="/">
        <Main></Main>
      </Route>
    </div>
  );
}

export default App;
