import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 20,
  },
});

export default class Title extends Component {
  render() {
    const {addItem} = this.props;
    return (
      <View style={styles.input}>
        <TextInput style={{fontSize: 18}}
          placeholder="Enter an item"
          onSubmitEditing={(text) => addItem(text)}
        />
      </View>
    );
  }
}
 

