import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';

const STORAGE_KEY = 'todoList';

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
      todos: []
    }
  }

  onChangeText = (newText) => {
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
    const newTodos = [newItem, ...todos];
    if (!newItem) return

    this.setState({todos: newTodos});
    this.save(newTodos);
  }

  toggleCheck = (x) => {
    const {todos} = this.state;
    const newTodos = [];
    const newCompleted = x.completed ? false: true;

    this.state.todos.forEach((item) => {
      if (item.text === x.text) {
        var newItem = {
          text: x.text,
          completed: newCompleted
        }
        newTodos.push(newItem)
      } else {
        newTodos.push(item)
      }
    })
    this.setState({todos: newTodos});
    this.save(newTodos);
  }

  removeItem = (index) => {
    const {todos} = this.state;
    const newTodos = todos.filter((item, i) => i !== index);

    this.setState({todos: newTodos});
    this.save(newTodos);
  }

  removeCompleted = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((item) => item.completed === false);

    this.setState({todos: newTodos});
    this.save(newTodos);
  }

  load = async () => {
    try {
      //problem with getItem
       const list = await AsyncStorage.getItem(STORAGE_KEY);  
       if (list !== null) {
         this.setState({todos: JSON.parse(list)})
       }
    } catch (e) {
      console.log('failed to load')
    }
  }

  save = async (newList) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.toString(newList));
    } catch (e) {
      console.log('failed to save')
    }
  }

  componentWillMount() {
    this.load()
  }

  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Input changeText={this.onChangeText} addItem={this.addItem}/>
        <List 
          list={this.state.todos} 
          toggleCheck={this.toggleCheck}
          removeItem={this.removeItem}
        />
        <Footer removeCompleted={this.removeCompleted}/>
      </View>
    );
  }
}