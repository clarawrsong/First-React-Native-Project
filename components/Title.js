import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    padding: 15,
    backgroundColor: '#ff328b'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  }
});

export default class Title extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Todo List</Text>
      </View>
    );
  }
}
 

