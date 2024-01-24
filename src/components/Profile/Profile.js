import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";
import "../Profile/Profile.css";

const Profile = ({ onSelectCard, dogList }) => {
  //what does my profile need to function?
  //needs to be logged in
  //needs current user profile info
  //needs dog list - matched to profile specifics

  return (
    <section className="profile">
      <div className="profile__welcome">
        <h2>Welcome back, Danielle</h2>
      </div>
      <div className="profile__content">
        <div className="profile__sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="profile__cards" id="card-section">
          {" "}
          {dogList.map((item) => (
            <Card onSelectCard={onSelectCard} item={item} key={item.id}></Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Profile;

//add sidebar on left with edit profile button,
//see my matches button, and logout button
//main displays either profile form prefilled
//and editable. And save edits button on the bottom
//or if they click "see my matches" then they see dogs
//matching their existing profile.

//for profile avatar possibly choose one for them,
//or generate random image to fill there

//need to set a max # of cards shown for now to limit page getting too big
