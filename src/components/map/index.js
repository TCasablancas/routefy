import React, { Component } from 'react';
import { Container } from './styles';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import * as Icon from 'react-bootstrap-icons';
import { PinIcon } from '../../assets';

const key = 'AIzaSyCY0cCfHbyEZYPTOysqihCqa_jjQ9iFyxA';

const customMarker = new L.icon({
  iconUrl: "data:image/png;base64,"+`${PinIcon}`,
  iconSize: [40, 40],
  iconAnchor: [77, 55],
  popupAnchor: [0, -41],
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

export const userLocationData = {
  name: "Adamastor Filgueiras",
  location: "Rua Professor Torres Homem",
  town: "Santos",
  country: "Brasil",
  weight: "120kg",
  lat: "-23.9723551",
  long: "-46.3058914"
}

export default class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
              lat: `${userLocationData.lat}`,
              lng: `${userLocationData.long}`,
            },
            userLocation: false,
            zoom: 3
        };
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          userLocation: true,
          zoom: 15
        })
      }, () => {
      fetch('https://iapi.co/json')
      .then(res => res.json())
      .then(location => {
        this.setState({
          location: {
            lat: location.latitude,
            lng: location.longitude
          },
          userLocation: true,
          zoom: 15
        })
      })
    })
    }

    render() {
        const position = [this.state.location.lat, this.state.location.lng]
        return(
            <Container>
                <div id="map">
                <Map center={position} zoom={this.state.zoom} style={{height: "94vh"}}>
                <ReactLeafletGoogleLayer googleMapsLoaderConf={{KEY: key}} type={'roadmap'}  animate={true} />
                    {
                      this.state.userLocation ?
                      <Marker position={position} icon={customMarker}>

                          <Popup>
                              <h2>{userLocationData.name}</h2><br />{userLocationData.weight}
                              <p>Current location: { JSON.stringify(this.state.currentPos, null, 2)}</p>
                          </Popup>
                      </Marker> : null
                    }
                </Map>
                </div>

            </Container>
        );
    }
}
