import React, { useState } from "react";
import Head from "next/head";

import "normalize.css/normalize.css";
import "../style/style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import nprogress from "nprogress";

import meetAMailbot from "../assets/ill-meet-a-mailbot.png";
import mailbotsLogo from "../assets/mailbots-logo-lg.png";

function handleRequestAccess(e) {
  e.preventDefault();
  const email = document.getElementById("persons-email").value;
  debugger;
  nprogress.start();
  axios({
    method: "POST",
    url: "/subscribe",
    data: { email }
  })
    .then(success => {
      nprogress.done();
      debugger;
      toast.success(`We added ${email} to the list!`, {
        position: toast.POSITION.TOP_CENTER
      });
    })
    .catch(error => {
      nprogress.done();
      debugger;
      console.log(error);
      toast.error(
        `"Sorry, we couldn't add you from here! Can you send an email to help+mailbots@humans.fut.io instead?"`,
        {
          position: toast.POSITION.TOP_CENTER
        }
      );
    });
}

export default () => (
  <div className="App">
    <Head>
      <title>MailBots</title>
    </Head>
    <ToastContainer />
    <div className="Nav">
      <img src={mailbotsLogo} width="150px" />
    </div>
    <div className="Hero">
      <div className="text">
        <h1>The Email Bot Platform</h1>
        <h2>
          Create, discover and manage bots, AIs and assistants that help people
          get more done from their inbox.
        </h2>

        <form>
          <label className="light">
            <div>Sign up for the preview</div>
            <div
              style={{ marginTop: 10, display: "flex", alignItems: "center" }}
            >
              <input
                placeholder="human@email.com"
                type="email"
                id="persons-email"
              />
              <button className="btn-primary" onClick={handleRequestAccess}>
                Request access
              </button>
            </div>
          </label>
        </form>
        <p className="light">
          From our blog:{" "}
          <a
            className="light"
            href="https://medium.com/mailbots/introducing-mailbots-bots-for-email-41602dd145d0"
          >
            Introducing MailBots: Bots for Email
          </a>
        </p>
      </div>

      <div className="hero-image-container">
        <img
          src="http://fut-cdn.s3.amazonaws.com/mailbots/meet-a-mailbot.svg"
          className="hero-image"
        />
      </div>
    </div>
  </div>
);
