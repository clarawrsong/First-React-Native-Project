import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  header: {
    top: 20,
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: '#87CEEB'
  },
  title: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
  }
});

export default class Checkbox extends Component {
  render() {
    return (
      <View>
        <Text>Checkbox</Text>
      </View>
    );
  }
}
 

