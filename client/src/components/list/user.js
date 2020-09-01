import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, UserView, UserName, ButtonsContainer, ViewWeight, UserContainer } from './styles';
import Button from './../reusable/button';
import * as Icon from 'react-bootstrap-icons';

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
          <UserContainer>
            <UserName>{ nome }</UserName>
            <Label style={{paddingBottom: '0'}}>{ endereco }</Label>
            <Label style={{fontSize: '10px', paddingTop: '0'}}>{ cidade } - { pais }</Label>
            <Label><b>{ peso }</b>kg</Label>
            <Label>
              <Icon.ArrowLeftRight color="gray" size="11" /> { latitude }
              <Icon.Code color="black" size="12" style={{margin: '0 10px'}} />
              <Icon.ArrowDownUp color="gray" size="11" /> { longitude }
            </Label>
          </UserContainer>
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
