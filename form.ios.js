import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import Form from 'react-native-form'

export default class SearchForm extends Component {
  render() {
    return (
      <View>
      <Text style={styles.formLabel}>
          Enter your search terms below:
        </Text>
        <Form ref="form">
          <TextInput style={styles.writeIn} type="TextInput" name="searchTerm" placeholder="Search" keyboardType="default" autoCapitalize="none" returnKeyType="done" />
        </Form>
        <Button onPress={this.props.sendRequest} title="Submit" color="#841584" accessibilityLabel="Submit your search terms"/>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  writeIn: {
    width:300,
    height: 50,
    borderColor: '#808080',
    borderWidth: 1
  },
  formLabel: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})
module.exports = SearchForm;