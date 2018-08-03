import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection:'row'
  },
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
  },
  remove: {
    margin: 10,
    marginLeft: 14,
    alignSelf:'center'
  },
  removeX: {
    fontSize: 16,
    color:'red'
  }
});

export default class Checkbox extends Component {
  
  render() {
    const {item} = this.props;
    var checkStyle = this.props.checked ? styles.check : null;
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.box}
          onPress={() => {this.props.toggleCheck(item)}}
        >
          <View style={checkStyle}/>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.remove}
          onPress={() => {this.props.removeItem(this.props.index)}}
        >
          <Text style={styles.removeX}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 

