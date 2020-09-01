import React, { Component } from 'react';
import { MessageBottom } from './styles';
import PropTypes from 'prop-types';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      show: false
    }
  }
  render() {
    const { message, show } = this.props;
    return(
      <>
        <MessageBottom show>
          { message }
        </MessageBottom>
      </>
    )
  }
}

Messages.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool
}
