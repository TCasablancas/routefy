import React, { Component } from 'react';
import GlobalStyle from './../../styles/global';
import Header from './../header';
import { Board, MapContainer } from './../../styles/container';
import Mapview, { userLocationData } from './../map';
import Message from './../reusable/message';
import Delivery from './../client';
import List from './../list';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: ''
    }
  }

  render() {
    return(
      <>
        <GlobalStyle />
        <Header />
        <Board>
          <Delivery />
          <MapContainer>
            <Message message={this.state.apiResponse} show="false"/>
            <Mapview />
            <List
              clientName={ userLocationData.name }
              clientLocation={ userLocationData.location }
              clientTown={ userLocationData.town }
              clientCountry={ userLocationData.country }
              weight="120"
              pinLat={ userLocationData.lat }
              pinLong={ userLocationData.long }
            />
          </MapContainer>
        </Board>
      </>
    )
  }
}
