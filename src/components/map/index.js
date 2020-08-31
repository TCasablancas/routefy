import React, { Component } from 'react';
import { Container } from './styles';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

const key = 'AIzaSyCY0cCfHbyEZYPTOysqihCqa_jjQ9iFyxA';

const customMarker = new L.icon({
  iconUrl: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMDM2LjM2MikiPjxwYXRoIGZpbGw9IiNjMmU0ZjgiIGQ9Im0gMy45OTQ1MDU0LDEwNDAuODU4OCBhIDMuOTk5OTk1NywzLjk5OTk5NTcgMCAwIDEgMy45OTk5OTU4LC00IDMuOTk5OTk1NywzLjk5OTk5NTcgMCAwIDEgMy45OTk5OTU4LDQiLz48cGF0aCBmaWxsPSIjYzJlNGY4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0gNC4wMTA1MSwxMDQwLjg2NTcgYyAwLDIuOTk2NyAyLjU5OTQ5LDUuMzM3MSAzLjkwMDAzLDggMS4zNjcsLTIuNjYzNiA0LjA5OTk3LC01LjAwMzMgNC4wOTk5NywtOCIvPjxwYXRoIGZpbGw9IiMyNDlmZTYiIHN0eWxlPSJsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwO3RleHQtdHJhbnNmb3JtOm5vbmU7YmxvY2stcHJvZ3Jlc3Npb246dGI7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsIiBkPSJtIDcuOTk0MTQwNiwxMDM2LjM1OTQgYyAtMi40NzkzNTg2LDAgLTQuNTAwMDAyNiwyLjAyMDYgLTQuNSw0LjUgYSAwLjUwMDA0OTk3LDAuNTAwMDQ5OTcgMCAxIDAgMSwwIGMgLTIuMWUtNiwtMS45Mzg5IDEuNTYxMDgxOSwtMy41IDMuNSwtMy41IDEuOTM4OTE4MSwwIDMuNTAwMDAyNCwxLjU2MTEgMy41MDAwMDA0LDMuNSBhIDAuNTAwMDQ5OTcsMC41MDAwNDk5NyAwIDEgMCAxLDAgYyAyZS02LC0yLjQ3OTQgLTIuMDIwNjQyLC00LjUgLTQuNTAwMDAwNCwtNC41IHoiIGNvbG9yPSIjMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgb3ZlcmZsb3c9InZpc2libGUiIHdoaXRlLXNwYWNlPSJub3JtYWwiLz48cGF0aCBmaWxsPSIjMjQ5ZmU2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0eWxlPSJsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwO3RleHQtdHJhbnNmb3JtOm5vbmU7YmxvY2stcHJvZ3Jlc3Npb246dGI7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsIiBkPSJtIDQuMDAzOTA2MiwxMDQwLjM1OTQgYSAwLjUwMDA1LDAuNTAwMDUgMCAwIDAgLTAuNDk0MTQwNiwwLjUwNTggYyAwLDEuNjQzIDAuNzA4MDUwMywzLjA3MDUgMS41MzkwNjI1LDQuMzkyNiAwLjgzMTAxMjIsMS4zMjIxIDEuNzk0MTM5NCwyLjU2MjggMi40MTIxMDk0LDMuODI4MSBhIDAuNTAwMDUsMC41MDAwNSAwIDAgMCAwLjg5NDUzMTMsMC4wMSBjIDAuNjQ4ODUxMSwtMS4yNjQzIDEuNjYxNDA0MiwtMi41MDYgMi41MzUxNTYyLC0zLjgyODIgMC44NzM3NTIsLTEuMzIyMSAxLjYxOTE0MSwtMi43NSAxLjYxOTE0MSwtNC40MDA0IGEgMC41MDAwNSwwLjUwMDA1IDAgMSAwIC0xLDAgYyAwLDEuMzQ2NCAtMC42MTg2NDMsMi41ODY5IC0xLjQ1MzEyNSwzLjg0OTYgLTAuNjg3ODM3NywxLjA0MDkgLTEuNDY1NTExMywyLjExNTcgLTIuMTM2NzE5MSwzLjIzMjUgLTAuNjM3MTE5NywtMS4xMTIgLTEuMzcxMTM4LC0yLjE4NDkgLTIuMDIzNDM3NSwtMy4yMjI3IC0wLjc5Mzg2NzgsLTEuMjYzIC0xLjM4NjcxODgsLTIuNTA1NiAtMS4zODY3MTg4LC0zLjg1OTQgYSAwLjUwMDA1LDAuNTAwMDUgMCAwIDAgLTAuNTA1ODU5NCwtMC41MDU4IHoiIGNvbG9yPSIjMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgb3ZlcmZsb3c9InZpc2libGUiIHdoaXRlLXNwYWNlPSJub3JtYWwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtIDguOTk0NTAxMSwxMDQwLjg2MjMgYSAxLDEgMCAwIDEgLTEsMSAxLDEgMCAwIDEgLTEsLTEgMSwxIDAgMCAxIDEsLTEgMSwxIDAgMCAxIDEsMSB6Ii8+PHBhdGggZmlsbD0iIzI0OWZlNiIgc3R5bGU9ImxpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0Yjtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWwiIGQ9Ik03Ljk5NDE0MDYgMTAzOS4zNjEzYy0uODIyNTA0OCAwLTEuNS42Nzc1LTEuNSAxLjUgMCAuODIyNS42Nzc0OTUyIDEuNSAxLjUgMS41LjgyMjUwNDggMCAxLjUtLjY3NzUgMS41LTEuNSAwLS44MjI1LS42Nzc0OTUyLTEuNS0xLjUtMS41em0wIDFjLjI4MjA2NDcgMCAuNS4yMTguNS41IDAgLjI4MjEtLjIxNzkzNTMuNS0uNS41LS4yODIwNjQ3IDAtLjUtLjIxNzktLjUtLjUgMC0uMjgyLjIxNzkzNTMtLjUuNS0uNXpNMTIuMDgzOTg0IDEwNDUuNTg3OWEuNTAwMDUuNTAwMDUgMCAwIDAtLjE3OTY4Ny45NjY4Yy45OTY2NzkuNDAzNyAxLjYzNzM0MS45MzMgMS45MTQwNjIgMS40MTk5LjI3NjcyMi40ODY5LjI3MDI1NS45MDc3LS4wOTE4IDEuNDI1OC0uNzI0MDk2IDEuMDM2MS0zLjAzNTU4NSAxLjk1MzYtNS42NzM4Mjc2IDEuOTY0OC0yLjYzODI2NTguMDExLTQuOTgxOTE2Mi0uODgyOS01Ljc0ODA0NjktMS45MjE4LS4zODMwNjktLjUxOTUtLjQwMjA2NTgtLjk0MzMtLjE0NDUzMTMtMS40Mjc4LjI1NzUzNDYtLjQ4NDQuODc0NjA4My0xLjAxODMgMS44NTU0Njg4LTEuNDI5N2EuNTAwMDUuNTAwMDUgMCAxIDAtLjM4NjcxODgtLjkyMThjLTEuMTIwNjM5Mi40Ny0xLjkzNjU2NjQgMS4xMDIxLTIuMzUxNTYyNCAxLjg4MjgtLjQxNDk5NjEuNzgwNi0uMzQzMTcxNDEgMS43MjI5LjIyMjY1NjIgMi40OTAyIDEuMTMxNjUzNyAxLjUzNDcgMy43MTEwNjggMi4zNDAzIDYuNTU4NTkzOCAyLjMyODEgMi44NDc1MDAyLS4wMTIgNS40MDI3MjIyLS44MzczIDYuNDg4MjgxMi0yLjM5MDYuNTQyNzgzLS43NzY3LjU3OTU1NC0xLjcyMTguMTQwNjI1LTIuNDk0MS0uNDM4OTI5LS43NzIzLTEuMjczNTQ5LTEuMzkzOS0yLjQwODIwMy0xLjg1MzVhLjUwMDA1LjUwMDA1IDAgMCAwLS4xOTUzMTMtLjAzOXoiIGNvbG9yPSIjMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgb3ZlcmZsb3c9InZpc2libGUiIHdoaXRlLXNwYWNlPSJub3JtYWwiLz48L2c+PC9zdmc+",
  iconSize: [45, 45],
  iconAnchor: [13, 0],
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

export const userLocationData = {
  name: "Thiago Silva",  
  location: "Rua Professor Torres Homem",
  town: "Santos",
  country: "Brasil",
  lat: "-23.972405",
  long: "-46.303603"
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
                <ReactLeafletGoogleLayer googleMapsLoaderConf={{KEY: key}} type={'roadmap'} />
                    {
                      this.state.userLocation ?
                      <Marker position={position} icon={customMarker}>
                          <Popup>
                              <h2>Exemplo</h2><br />Que queríamos mostrar.
                          </Popup>
                      </Marker> : null
                    }
                </Map>
                </div>

            </Container>
        );
    }
}
