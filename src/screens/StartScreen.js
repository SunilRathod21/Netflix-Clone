import React, { useState } from "react";
import FAQAccodinon from "../Components/FAQAccodinon";
import Footer from "../Components/Footer";
import Jumbotron from "../Components/Jumbotron";
import "./StartScreen.css";
import AuthScreen from "./AuthScreen";
import { useHistory } from "react-router-dom";
function StartScreen() {
  const [signIn, setSignIn] = useState(false);
  const history = useHistory();
  return (
    <div>
      <div className="startScreen">
        <div className="startScreen__backgorund">
          <img
            className="startScreen__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          {signIn ? (
            <button
              className="startScreen__button"
              onClick={() => {
                setSignIn(false);
                history.push("/");
              }}
            >
              Home
            </button>
          ) : (
            <button
              className="startScreen__button"
              onClick={() => {
                setSignIn(true);
                history.push("/auth");
              }}
            >
              Sign In
            </button>
          )}
          <div className="startScreen__gradient" />
        </div>
        <div className="startScreen__body">
          {history.location.pathname.split("/")[1] === "auth" ? (
            <AuthScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmers and more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="startScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="startScreen__getStarted"
                    onClick={() => {
                      setSignIn(true);
                      history.push("/auth");
                    }}
                  >
                    GET STARTED {">"}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <Jumbotron
        heading="Enjoy on your TV."
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <Jumbotron
        heading="Download your shows to watch offline.."
        text="Save your favourites easily and always have something to watch."
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        isReverse
      />
      <Jumbotron
        heading="Watch everywhere."
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
      />
      <Jumbotron
        heading="Create profiles for children."
        text="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        imgUrl="https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
        isReverse
      />
      <FAQAccodinon />
      <Footer />
    </div>
  );
}

export default StartScreen;
