import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  box: {
    alignSelf:'center',
    justifyContent:'center',
    height: 26,
    width: 26,
    borderWidth:1,
    borderColor: '#4c4c4c',
    backgroundColor: 'white',
  },
  check: {
    height: 18,
    width: 18,
    backgroundColor: '#4c4c4c',
    alignSelf:'center'
  }
});

export default class Checkbox extends Component {
  
  render() {
    const {item} = this.props;
    var checkStyle = this.props.checked ? styles.check : null;
    return (
      <TouchableOpacity 
        style={styles.box}
        onPress={() => {this.props.toggleCheck(item)}}
      >
        <View style={checkStyle}/>
      </TouchableOpacity>
    );
  }
}
 

