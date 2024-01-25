import React from "react";
import Avatar from "../../images/pit_homepage.png";

const SideBar = ({ onEditProfileModal }) => {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-menu">
        <img className="profile__avatar" src={Avatar} alt="avatar"></img>
        <div className="profile__name">Danielle</div>
      </div>
      <div className="profile__sidebar-button-container">
        <button
          className="profile__sidebar-button"
          type="button"
          onClick={onEditProfileModal}
        >
          Edit Profile
        </button>
        <button className="profile__sidebar-button" type="button">
          See My Matches
        </button>
        <button className="profile__sidebar-button" type="button">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
