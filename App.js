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

  toggleCheck = (i) => {
    const {todos} = this.state;
    const newTodos = [];
    const newCompleted = i.completed ? false: true;

    this.state.todos.forEach((item) => {
      if (item.text === i.text) {
        var newItem = {
          text: i.text,
          completed: newCompleted
        }
        newTodos.push(newItem)
      } else {
        newTodos.push(item)
      }
    })
    this.setState({todos: newTodos});
  }

  render() {
    // console.log(this.state.todos)
    return (
      <View style={styles.container}>
        <Title />
        <Input changeText={this.onChangeText} addItem={this.addItem}/>
        <List list={this.state.todos} toggleCheck={this.toggleCheck}/>
        <Footer />
      </View>
    );
  }
}
