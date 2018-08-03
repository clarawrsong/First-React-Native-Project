import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  
  addItem = (text) => {
    const {todos} = this.state;
    this.setState({todos: [text, ...todos]});
    console.log('submitted')
  }

  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Input addItem={this.addItem}/>
        <List />
        <Footer />
      </View>
    );
  }
}
