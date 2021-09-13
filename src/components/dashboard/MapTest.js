import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import { render } from "react-dom";

// Note - Issue with clicking on the map anywhere - infoWindows pop up now 

// Video Link - https://www.youtube.com/watch?v=Pf7g32CwX_s    15minutes in `
class MapTest extends Component {
  state = {
    showInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
  }

  // onMarkerClick = (props, marker, e) => {
  //   e.nativeEvent.stopImmediatePropagation()
  //   e.preventDefault()
  // }


  // handleClick = e => {
  //   this.setState(prevState => ({
  //     showInfoWindow: !prevState.showInfoWindow
  //   }))
  // }

  handleMouseOver = (props, marker, e) => {
    console.log("PROPS HOVER", props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    })
    console.log(this.state)
  }

  handleMouseMap = (props, marker, e) => {
    console.log("OUT")
    this.setState({
      showInfoWindow: false,
      activeMarker: null,
      selectedPlace: "",
    })
  }



  render() {
    // const {showInfoWindow} = this.state
    const {locations} = this.props;

    const displayMarkers = () => {
      if (locations !== null) {
        return locations.map((location, index) => {  
          return display(location, index);
        }) 
      } else {
        return null;
      }
    }
  
    const display = (spot, index) => {
      let marker = spot[1];
        return (
            <Marker key={index} id={index} spot={spot} position={{
              lat: marker.u_,
              lng: marker.h_
            }}
            title={spot[0]}
            name={spot[0]}
            onClick={this.handleMouseOver}
            >
            
            </Marker>
        )  
    }
  
    return (
        <div className="section">
          {locations !== null ? 
            <div className="card z-depth-0 p-4">
                <div id="map-content" className="card-content">
                    <div id="map">
                    <Map 
                      google={this.props.google}
                      zoom={8}
                      // style={mapStyles}
                      initialCenter={{ lat: 47.444, lng: -122.176}}
                      onMouseover={this.handleMouseMap}
                      >
                      {displayMarkers()}
                      <InfoWindow marker={this.state.activeMarker} visible={this.state.showInfoWindow}>
                        <div>
                          <h5>{this.state.selectedPlace.name}</h5>
                        </div>
                      </InfoWindow>
                    </Map>
                    </div>
                </div>
            </div>
            : null
          }    
        </div>
    )

  }
}

 

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  const locations = project.locations ? Object.entries(project.locations) : null;

  return {
    locations: locations,
    auth: state.firebase.auth
  };
};


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ]),
  GoogleApiWrapper({
  apiKey: 'AIzaSyCA9SKgoBD6F007I3vtQ2_e2pFlCJmQEks'
}))(MapTest);