import React, { Component } from "react";
import M from 'materialize-css'

class Collapsible extends Component {
  componentDidMount() {
    const options1 = {
      onOpenStart: () => {

      },
      onOpenEnd: () => {
        document.querySelector(".active .expand").innerHTML = "expand_less"
      },
      onCloseStart: () => {

      },
      onCloseEnd: (e) => {
        e.firstElementChild.lastElementChild.innerHTML = "expand_more"
      },
      inDuration: 300,
      outDuration: 200
    };
    M.Collapsible.init(this.Collapsible1, options1);
  }
  render() {
    const { title, description } = this.props
    return (
      <div>
          <ul
            ref={Collapsible => {
              this.Collapsible1 = Collapsible;
            }}
            className="collapsible"
          >
            <li>
              <div className="collapsible-header valign-wrapper custom-blue custom-text-white">
                <span className="card-title col l9 xl10">{title}</span><i className="expand material-icons">expand_more</i>
              </div>
              <div className="collapsible-body">
                <span>{description}</span>
              </div>
            </li>
          </ul>
      </div>
    );
  }
}

export default Collapsible;