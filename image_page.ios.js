import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class ImagePage extends Component {
  render() {
    return(
      <Image style={{width: this.props.imageInfo, height: }}>
      )
  }
}
// this.props.imageInfo
// this.props.goBack
module.exports = ImagePage;