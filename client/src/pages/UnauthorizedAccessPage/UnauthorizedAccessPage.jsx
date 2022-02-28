import React from "react";
import { Link } from "react-router-dom";
import "./UnauthorizedAccessPage.scss"

function UnauthorizedAccessPage() {
  return (
    <div className="forbidden-page">
      <h1 className="forbidden-page__title">403</h1>
      <h5 className="forbidden-page__subtitle">ACCESS FORBIDDEN</h5>
      <Link className="forbidden-page__link" to="/">Click here to login</Link>
    </div>
  );
}

export default UnauthorizedAccessPage;
