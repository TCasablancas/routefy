import React, { Component, View } from 'react';
import { ViewContainer } from '../../styles/container';
import { Container } from './styles';
// import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0],
});

type State = {
    lat: number,
    lng: number,
    zoom: number,
}

export default class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: -23.972405,
            lng: -46.303603,
            zoom: 15
        };
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return(
            <ViewContainer>
                <Container>
                    <div id="map">
                    <Map center={position} zoom={this.state.zoom} style={{height: "64.5vh"}}>
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </Map>
                    </div>
                </Container>
            </ViewContainer>
        );
    }
}