import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  footer: {
    height: 50,
    alignItems:'center',
    padding: 15,
    backgroundColor: '#878787'
  },
  text: {
    textAlign: 'center',
    color:'white'
  }
});

export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.footer} > 
        <Text style={styles.text}>Remove completed items</Text>
      </TouchableOpacity>
    );
  }
}
 

