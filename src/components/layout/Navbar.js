import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import Sidenav from "../../features/Sidenav";

const Navbar = props => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper deep-purple darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          Wander
        </Link>
        <Sidenav profile={profile} auth={auth}/>
        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
