import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/logos/Vertical-Logo.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import "./SignUpPage.scss";

class SignUp extends Component {
  render() {
    return (
      <div>
        <header className="signup__header">
          <div className="signup__header--left">
            <Link to="/">
              <img src={BackArrow} alt="back arrow" />
            </Link>
            <p className="signup__text">Sign In</p>
          </div>
          <div className="signup__header--right">
            <img src={Logo} alt="logo" />
          </div>
        </header>
        <div className="signup__container">
          <h1 className="signup__title">Sign Up</h1>
          <form className="form" action="">
            <label className="form__wrapper">
              <p className="form__text">First Name</p>
              <input className="form__input" type="text" />
            </label>
            <label className="form__wrapper">
              <p className="form__text">Last Name</p>
              <input className="form__input" type="text" />
            </label>
            <label className="form__wrapper">
              <p className="form__text">Email</p>
              <input className="form__input" type="text" />
            </label>
            <label className="form__wrapper">
              <p className="form__text">Username</p>
              <input className="form__input" type="text" />
            </label>
            <label className="form__wrapper">
              <p className="form__text">Password</p>
              <input className="form__input" type="text" />
            </label>
            <div className="form__button">
              <Button />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
