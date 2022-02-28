import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../../assets/logos/Vertical-Logo.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import axios from "axios";
import "./SignUpPage.scss";

function SignUp() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userExists, setUserExits] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:9090/register", {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        userName: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then(() => {
        alert("User successfully signed up");
        setIsSubmitted(true);
      })
      .catch(() =>
        alert("Username already exists, please choose another username")
      );
  };

  if (isSubmitted) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup">
      <header className="signup__header">
        <div className="signup__header--left">
          <Link to="/">
            <img src={BackArrow} alt="back arrow" />
          </Link>
          <p className="signup__text">Sign In</p>
        </div>
        <img src={Logo} alt="logo" />
      </header>
      <div className="signup__container">
        <h1 className="signup__title">Sign Up</h1>
        <form className="form" method="post" onSubmit={handleOnSubmit}>
          <label className="form__text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
          <label className="form__text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form__input"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
          <label className="form__text" htmlFor="email">
            Email
          </label>
          <input className="form__input" type="email" id="email" name="email" required/>
          <label className="form__text" htmlFor="username">
            Username
          </label>
          <input
            className="form__input"
            type="text"
            id="username"
            name="username"
            required
          />
          <label className="form__text" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            name="password"
            required
            minLength={8}
          />

          <div className="form__button">
            <button className="signup-button signup-button__text" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
