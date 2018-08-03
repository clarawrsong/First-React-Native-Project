import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Checkbox from './Checkbox';

const styles = StyleSheet.create({
  list: {
    padding: 20
  }
});

export default class List extends Component {

  renderItem() {
    
  }
  
  render() {
    return (
        <ScrollView style={styles.list} >
            <Text>List</Text>
        </ScrollView>
    );
  }
}
 

