import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Components/Nav";
import SubscriptionRow from "../Components/SubscriptionRow";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>My Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <SubscriptionRow type="Premium" quality="4K + HDR" />
              <SubscriptionRow type="Basic" quality="720p" />
              <SubscriptionRow type="Standard" quality="1080p" />

              <button
                onClick={() => {
                  auth.signOut();
                  history.push("/");
                }}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
