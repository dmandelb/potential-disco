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
      <View>
        <Image source={{uri: this.props.imageInfo.webformatURL}} style={{width: this.props.imageInfo.webformatWidth, height: this.props.imageInfo.webformatHeight}} resizeMode="contain"/>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            By: {this.props.imageInfo.user}
          </Text>
          <Text>
            Tags: {this.props.imageInfo.tags}
          </Text>
          <Text>
            Resolution: {this.props.imageInfo.webformatWidth}x{this.props.imageInfo.webformatHeight}
          </Text>
        </View>
      </View>
      )
  }
}
// this.props.imageInfo
// this.props.goBack
module.exports = ImagePage;