import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUpModal/SignUpModal";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  // ----------------USE STATE ---------------------------
  const [activeModal, setActiveModal] = useState("");

  // ----------------HANDLERS ----------------------------
  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignUpSubmit = () => {
    console.log("signUpSubmit Needs Done");
  };

  return (
    <div>
      <Header onSignUpModal={handleSignUpModal}></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
      </Switch>
      <Footer></Footer>
      {activeModal === "signup" && (
        <SignUpModal
          handleCloseModal={handleCloseModal}
          onClose={handleCloseModal}
          onOpen={activeModal === "signup"}
          onSignUp={handleSignUpSubmit}
          setActiveModal={setActiveModal}
        />
      )}
    </div>
  );
}

export default App;
