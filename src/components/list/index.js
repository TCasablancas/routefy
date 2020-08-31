import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Label } from './styles';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      endereco: '',
      cidade: '',
      pais: '',
      peso: '',
      latitude: '',
      longitude: ''
    }
  }
  render() {
    const { nome, endereco, cidade, pais, peso, latitude, longitude } = this.props;
    return(
      <>
        <Container>
          <ul>
            <li style={{background: '#f9f9f9', padding: '10px'}}>
              <h3 style={{padding: '5px'}}>Thiago Silva</h3>
              <Label>{ endereco }<br/>{ cidade } - { pais }</Label>
              <Label>{ peso }kg</Label>
              <Label>Lat { latitude }<br/>Long { longitude }</Label>
            </li>
          </ul>
        </Container>
      </>
    )
  }
}

Label.propTypes = {
  endereco: PropTypes.string,
  cidade: PropTypes.string,
  pais: PropTypes.string,
  peso: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string
}
