import React, { useState } from "react";
import Head from "next/head";

import "normalize.css/normalize.css";
import "../style/style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import nprogress from "nprogress";

import meetAMailbot from "../assets/ill-meet-a-mailbot.png";
import mailbotsLogo from "../assets/mailbots-logo.svg";

function handleRequestAccess(e) {
  e.preventDefault();
  const email = document.getElementById("persons-email").value;
  debugger;
  nprogress.start();
  axios({
    type: "POST",
    url: "/subscribe",
    data: { email },
    contentType: "application/json; charset=utf-8"
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
    <div className="Nav">
      <img src={mailbotsLogo} />
    </div>
    <ToastContainer />
    <div className="Hero">
      <div className="text">
        <h1>The Email Bot Platform</h1>
        <h2>
          Create, discover and manage bots, AIs and assistants that help people
          get more done from their inbox.
        </h2>

        <form>
          <label>
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
        {/* <p>
          <a href="https://medium.com/">
            Introducing MailBots: Bots for Email
          </a>
        </p> */}
      </div>

      <div className="hero-image">
        <img src={meetAMailbot} style={{ width: 650 }} />
      </div>
    </div>
  </div>
);
