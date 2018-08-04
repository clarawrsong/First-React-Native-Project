import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({

});

export default class HomeScreen extends Component { 
  render() {
    return (
      <View >

        <Text>A crude home screen</Text>
        <Button
            title='Todo List'
            onPress={() => this.props.navigation.navigate('Todo')}
        />
      </View>
    );
  }
}
 

