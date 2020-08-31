import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, UserView, UserName } from './styles';

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
        <UserView>
          <UserName>{ nome }</UserName>
          <Label>{ endereco }<br/>{ cidade } - { pais }</Label>
          <Label>{ peso } kg</Label>
          <Label>Lat { latitude }<br/>Long { longitude }</Label>
        </UserView>
      </>
    )
  }
}

Label.propTypes = {
  nome: PropTypes.string,
  endereco: PropTypes.string,
  cidade: PropTypes.string,
  pais: PropTypes.string,
  peso: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string
}
