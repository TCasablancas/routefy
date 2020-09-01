import React, { Component } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/header';
import { Board, MapContainer } from './styles/container';
import Mapview, { userLocationData } from './components/map';
import Message from './components/reusable/message';
import Delivery from './components/client';
import List from './components/list';

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Board>
          <Delivery />
          <MapContainer>
            <Message message="O usuário foi cadastrado com sucesso!" show="false"/>
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
    );
  }
}

export default App;
