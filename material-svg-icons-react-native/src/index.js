import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from './SVG';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <Icon {...this.props}/>
    )
  }
}