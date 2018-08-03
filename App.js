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
      item: null,
      todos: [{text:'Walk the dog', completed:false},
        {text:'Mow lawn', completed:true}]
    }
  }

  onChangeText = (newText) => {
    // console.log(newText)
    this.setState({
      item: {
        text: newText,
        completed: false
      }
    })
  }
  
  addItem = () => {
    const {todos} = this.state;
    const newItem = this.state.item;
    if (!newItem) return
    this.setState({todos: [newItem, ...todos]});
  }

  render() {
    // console.log(this.state.todos)
    return (
      <View style={styles.container}>
        <Title />
        <Input changeText={this.onChangeText} addItem={this.addItem}/>
        <List list={this.state.todos}/>
        <Footer />
      </View>
    );
  }
}
