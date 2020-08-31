import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  render() {
    const { title, type } = this.props;
    return(
      <>
        <ButtonElement style={
          type == "cadastrar" ? {background: '#31DE51', color: '#39641E'} :
          type == "limpar" ? {background: '#FA2445', color: '#fff'} :
          type == "desabilitado" ? {background: '#D9D9D9', color: '#828282'} : null
        }> {title}
        </ButtonElement>
      </>
    )
  }
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired
}
