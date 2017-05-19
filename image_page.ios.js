import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');
export default class ImagePage extends Component {

  determineDimensions() {
    var imageDims = {
      width: this.props.imageInfo.webformatWidth,
      height: this.props.imageInfo.webformatHeight
    }
    var dimRatio = imageDims.width/imageDims.height
    if ( imageDims.width > window.width) {
      imageDims.height = imageDims.height*(window.width - 10)/imageDims.width
      imageDims.width = window.width - 10
    }
    else if (imageDims.height > window.height*.75){
      imageDims.width = imageDims.width(window.height*.75)/imageDims.height
      imageDims.height = window.height * .75
    };
    return imageDims
  }

  render() {
    var dimsToUse = this.determineDimensions()
    return(
      <View>
        <Image source={{uri: this.props.imageInfo.webformatURL}} style={{width: dimsToUse.width, height: dimsToUse.height}} />
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
          <Button title="Back" onPress={this.props.goBack}/>
        </View>
      </View>
      )
  }
}

module.exports = ImagePage;