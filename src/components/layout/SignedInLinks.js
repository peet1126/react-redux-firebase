import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/portfolio">Developer's Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/about">About This App</NavLink>
      </li>
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li onClick={props.signOut}>
        <NavLink to="/signin" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green accent-3 grey-text text-darken-3">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
