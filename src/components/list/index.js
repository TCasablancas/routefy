import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import User from './user';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return(
      <>
        <Container>
          <ul>
            <User
              nome="Thiago Silva"
              endereco="Rua Professor Torres Homem"
              cidade="Santos"
              pais="Brasil"
              peso="120"
              latitude="-12,123123"
              longitude="-12,12311"
            />
          </ul>
        </Container>
      </>
    )
  }
}
