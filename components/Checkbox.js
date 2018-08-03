import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  box: {
    alignSelf: 'flex-end',
  },
  check: {

  }
});

export default class Checkbox extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text>Checkbox</Text>
      </View>
    );
  }
}
 

