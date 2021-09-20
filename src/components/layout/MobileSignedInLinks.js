import React from "react";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const MobileSignedInLinks = props => {
  return (
    <ul>
      <li>
        <div className="user-view">
          <div className="background deep-purple darken-1"></div>
          <div className="row">
            <div className="col">
              <NavLink to="/" className="btn btn-floating green accent-3 grey-text text-darken-3">
              {props.profile.initials}
              </NavLink>
            </div>
            <div className="col">
              <span className="white-text name">{props.profile.firstName} {props.profile.lastName}</span>
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
        <NavLink to="/create">New Project</NavLink>
      </li>
      <div className="divider"></div>
      <li onClick={props.signOut}>
        <NavLink to="/signin" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <div className="divider"></div>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(MobileSignedInLinks);
