import React, { Component } from 'react';
import { UserLabel } from './styles';
import PropTypes from 'prop-types';

export default class UserData extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      location: '',
      weight: '',
      latitude: '',
      longitude: ''
    }
  }
  render() {
    const { name, location, weight, latitude, longitude } = this.props;
    return(
      <>
        <UserLabel
          name={this.name}
          location={this.location}
          weight={this.weight}
          latitude={this.latitude}
          longitude={this.longitude}
        />
      </>
    )
  }
}

UserData.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  weight: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string
}
