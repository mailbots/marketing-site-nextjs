import React from "react";

// import futLogo from './followupthen.png';
import futLogo from "./followupthen@2x.png";
import "./index.scss";

export default () => {
  return (
    <div className="HeroSection">
      <div className="HeroSection-box1">
        <h1 className="HeroSection-f1">The Email Bot Platform</h1>
        <h2 className="HeroSection-f2">
          Create, discover and manage bots, AIs and assistants that help people
          get more done from their inbox.
        </h2>

        <form className="HeroSection-emailbox">
          <label>
            <div>Sign up for the preview</div>
            <div
              style={{ marginTop: 10, display: "flex", alignItems: "center" }}
            >
              <input placeholder="human@email.com" type="email" />
              <button className="HeroSection-request-access">
                Request access
              </button>
            </div>
          </label>
        </form>
      </div>

      <div className="HeroSection-box2">
        <div className="HeroSection-box2-content" />
        <p>
          We are also the creators of{" "}
          <img
            src={futLogo}
            style={{
              verticalAlign: "middle",
              marginLeft: 5,
              display: "inline-block"
            }}
          />
        </p>
      </div>
    </div>
  );
};
