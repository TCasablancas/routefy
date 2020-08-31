import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import User from './user';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clientLocation: '',
      clientTown: '',
      clientCountry: '',
      weight: '',
      pinLat: '',
      pinLong: ''
    }
  }
  render() {
    const { clientName, clientTown, clientCountry, clientLocation, weight, pinLat, pinLong } = this.props;
    return(
      <>
        <Container>
          <ul>
            <User
              nome={ clientName }
              endereco={ clientLocation }
              cidade={ clientTown }
              pais={ clientCountry }
              peso={ weight }
              latitude={ pinLat }
              longitude={ pinLong }
            />
          </ul>
        </Container>
      </>
    )
  }
}

ClientList.propTypes = {
  clientName: PropTypes.string,
  clientLocation: PropTypes.string,
  clientTown: PropTypes.string,
  clientCountry: PropTypes.string,
  weight: PropTypes.string,
  pinLat: PropTypes.string,
  pinLong: PropTypes.string
}
