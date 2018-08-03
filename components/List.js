import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Checkbox from './Checkbox';

const styles = StyleSheet.create({
  list: {
    padding: 20
  }, 
  item: {
    margin: 4,
    padding: 10,
    backgroundColor: '#ffe0ec',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  completed: {
    backgroundColor: '#f7f7f7'
  },
  text: {
    fontSize: 18
  }
});

export default class List extends Component {

  renderItems = (item, i) => {
    var itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;
    return (
      <View style={itemStyle} >
        <Text style={styles.text}> {item.text} </Text>
        <Checkbox />
      </View>
    )
  }

  render() {
    return (
        <ScrollView style={styles.list}>
          {this.props.list.map(this.renderItems)}
        </ScrollView>
    );
  }
}
 

