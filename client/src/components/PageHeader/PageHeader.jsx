import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../../assets/logos/logo-horizontal.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import "./PageHeader.scss";

function PageHeader() {
  const history = useHistory();
  const logout = () => {
    sessionStorage.removeItem("authorization");
  };

  return (
    <header className="header">
      <img
        src={BackArrow}
        alt="back arrow"
        onClick={history.goBack}
        className={
          "header__arrow" +
          (location.pathname.match("/dashboard") ? "--actiive" : "")
        }
      />
      <NavLink to="/dashboard">
      <img src={Logo} alt="logo" />
      </NavLink>
      <NavLink to="/" onClick={logout}>
        Logout
      </NavLink>
    </header>
  );
}

export default PageHeader;
