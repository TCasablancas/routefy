import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/header';
import { Board } from './styles/container';
import Mapview from './components/map';
import Delivery from './components/client';
import List from './components/list';
import Remove from './components/remove';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Board>
        <Delivery />
        <Mapview />
      </Board>
    </>
  );
}

export default App;
