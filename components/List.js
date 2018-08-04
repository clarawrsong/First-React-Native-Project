import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Checkbox from './Checkbox';

const styles = StyleSheet.create({
  list: {
    padding: 20,
    paddingTop: 10
  }, 
  item: {
    margin: 4,
    padding: 8,
    backgroundColor: '#ffe0ec',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  completed: {
    backgroundColor: '#f7f7f7'
  },
  text: {
    fontSize: 18,
    alignSelf:'center'
  }
});

export default class List extends Component {

  renderItems = (item, i) => {
    var itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;
    return (
      <View style={itemStyle} >
        <Text style={styles.text}> {item.text} </Text>
        <Checkbox 
          item={item}
          index={i}
          checked={item.completed} 
          toggleCheck={this.props.toggleCheck}
          removeItem={this.props.removeItem}
        />
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
 

