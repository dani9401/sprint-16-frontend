import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUpModal/SignUpModal";
import LoginModal from "../LoginModal/LoginModal";
import ViewCardModal from "../ViewCardModal/ViewCardModal";
import { getDogList } from "../../utils/petFinderAPI.js";
import { Route, Switch } from "react-router-dom";

function App() {
  // ----------------USE STATE ---------------------------
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [dogList, setDogList] = useState([]);

  // ----------------HANDLERS ----------------------------
  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignUpSubmit = () => {
    console.log("signUpSubmit Function Needs Finished");
  };

  const handleLoginSubmit = () => {
    console.log("Login Submit Function Needs Finished");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("viewCard");
    setSelectedCard(card);
  };

  // ----------------USE EFFECT ----------------------------
  useEffect(() => {
    getDogList()
      .then((data) => {
        setDogList(data);
      })
      .catch(console.error);
  }, []);

  // --------------------------------------------

  return (
    <div>
      <Header
        onSignUpModal={handleSignUpModal}
        onLoginModal={handleLoginModal}
      ></Header>

      <Switch>
        <Route exact path="/">
          <Main onSelectCard={handleSelectedCard} dogList={dogList}></Main>
        </Route>

        <Route path="/profile">
          <Profile
            dogList={dogList}
            onSelectCard={handleSelectedCard}
          ></Profile>
        </Route>
      </Switch>

      <About></About>

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
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          onClose={handleCloseModal}
          onOpen={activeModal === "login"}
          onSignUp={handleLoginSubmit}
          setActiveModal={setActiveModal}
        />
      )}
      {activeModal === "viewCard" && (
        <ViewCardModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
