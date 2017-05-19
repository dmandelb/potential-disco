/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';
import Form from 'react-native-form'
var SearchForm = require('./form');
var ImagePage = require('./image_page')

export default class PotentialDisco extends Component {
  constructor(){
    super()
    this.state = {
      results: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      oneImage: null
    }
    this.sendSearchRequest = this.sendSearchRequest.bind(this)
    this.renderImagePreview = this.renderImagePreview.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  renderImagePage(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>
          PotentialDisco
        </Text>
      <ImagePage imageInfo={this.state.oneImage} goBack={this.handleBack}/>
      </View>
      )
  }

  handleBack() {
    this.setState({
      oneImage: null
    })
  }

  renderImagePreview(singleImage){
    return(
      <TouchableHighlight onPress={() => this.setState({
        oneImage: singleImage
      })}>
        <Image style={{width: singleImage.previewWidth, height: singleImage.previewHeight}} source={{uri: singleImage.previewURL}} />
      </TouchableHighlight>
      )
  }

  sendSearchRequest() {
    var searchTerms = this.refs.searchForm.refs.form.getValues().searchTerm.replace(/ /g,"+")
    fetch('https://pixabay.com/api/?key=5402129-904e24af145d03ab5e66dce4e&q=' + searchTerms).then((response) => response.json())
    .then((responseData) => {
      if (responseData.hits) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.hits),
          results: true
        })
      }else{
        Alert.alert()
      };
    })
  }

  renderForm() {
    return(
        <View style={styles.container}>
          <Text style={styles.titleText}>
            PotentialDisco
          </Text>
          <SearchForm ref="searchForm" sendRequest={this.sendSearchRequest}/>
        </View>
      )
  }

  render() {
    if (this.state.results && !this.state.oneImage) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}>
            PotentialDisco
          </Text>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderImagePreview} style={styles.ListView}/>
        </View>
        )
    } 
    else if (this.state.oneImage) {
      return this.renderImagePage();
    }
    else {
      return this.renderForm();
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 10
  },
  ListView: {
    flex: 2
  }
});

AppRegistry.registerComponent('PotentialDisco', () => PotentialDisco);
