import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '40%'
  };

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
          lat: 23.669296,
          lng: 86.151115
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map
         google={this.props.google}
         initialCenter={{
             lat: this.state.mapCenter.lat,
             lng: this.state.mapCenter.lng
         }}
        center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
        }}
        style={mapStyles}
        >
          <Marker 
            position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
          />
   
          
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCfLyC_2vIrvp8P7Ng1i-XSJc4j14zfy-s')
  })(MapContainer)