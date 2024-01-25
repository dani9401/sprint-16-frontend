import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ handleCloseModal, isOpen, onSubmit }) => {
  //const token = localStorage.getItem("jwt");

  const [name, setName] = useState("");
  //const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [dogBreed, setDogBreed] = useState("");

  //need to set these up as radio buttons/multiple choice

  //const currentUser = useContext(CurrentUserContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //const handleAvatarChange = (e) => {
  //  setAvatar(e.target.value);
  //};

  const handleSubmit = () => {
    console.log("handle submit goes here");
  };

  //useEffect(() => {
  //  if (!isOpen) {
  //    setName(currentUser.name);
  //    setAvatar(currentUser.avatar);
  //  }
  //}, [isOpen]);

  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={handleCloseModal}
      isOpen={isOpen}
      modalName={"editProfile"}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
    >
      <div className="modal__text-inputs">
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            className="modal__input"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
        <label className="modal__label">
          Email Address
          <input
            type="text"
            name="Email Address"
            placeholder="Email"
            minLength="5"
            maxLength="50"
            className="modal__input"
            //value={zipCode}
            //onChange={handleAvatarChange}
          ></input>
        </label>
        <label className="modal__label">
          5 Digit Zip Code
          <input
            type="text"
            name="Zip Code"
            placeholder="Zip Code"
            minLength="5"
            maxLength="5"
            className="modal__input"
            //value={zipCode}
            //onChange={handleAvatarChange}
          ></input>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
