import React, { Component } from "react";
import M from "materialize-css";
import MobileSignedInLinks from "../components/layout/MobileSignedInLinks";
import MobileSignedOutLinks from "../components/layout/MobileSignedOutLinks";

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
    instance.close();
    console.log(instance.isOpen);
  }

  render() {
    const {auth, profile} = this.props
    const links = auth.uid ? <MobileSignedInLinks profile={profile}/> : <MobileSignedOutLinks />;
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav hide-on-med sidenav-close"
        >
          
          {auth.isLoaded && links}
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidenav;