import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = (props) => {
  return (
    <ul>
      <li>
        <div className="user-view">
          <div className="background deep-purple darken-1"></div>
          <div className="row">
            <div className="col">
              <NavLink to="/signup" id="create-account" className="btn green accent-3 grey-text text-darken-3">
              Create Account
              </NavLink>
            </div>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="/portfolio">Developer's Portfolio</NavLink>
      </li>
      <div className="divider"></div>
      <li>
        <NavLink to="/about">About This App</NavLink>
      </li>
      <div className="divider"></div>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
      <div className="divider"></div>
    </ul>
  );
};

export default SignedOutLinks;
