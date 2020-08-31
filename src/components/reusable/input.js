import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputElement } from './styles';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlePlaceholder: ''
    }
  }
    render() {
      const { newPlaceholder } = this.props;
        return(
            <>
                <InputElement
                  placeholder = { newPlaceholder }
                />
            </>
        )
    }
}

Input.propTypes = {
  newPlaceholder: PropTypes.string
}
