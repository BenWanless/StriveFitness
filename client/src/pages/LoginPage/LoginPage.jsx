import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Logo from "../../assets/logos/Vertical-Logo.svg";
import "./LoginPage.scss";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:9090/login", {
        userName: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem(
            "authorization",
            `Bearer ${response.data.token}`
          );
          setIsLoggedIn(true);
        } 
      }).catch( err =>{
        alert("Username or password is incorrect");
      }
      );
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login__container">
      <img className="logo" src={Logo} alt="Logo" />
      <form className="form" onSubmit={handleOnSubmit}>
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
        />

        <div className="form__button">
          <button type="submit" className="login-button">
            <p className="login-button__text">Sign in</p>
          </button>
        </div>
        <Link to="/signup" className="form__link">
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
