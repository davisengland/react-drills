import React, {Component} from 'react';
import List from './List'
import NewTask from './NewTask'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(newTask) {
    this.setState({list: [...this.state.list, newTask]})
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.addTodo}/>
        <List todoList={this.state.list}/>
      </div>
    )
  }
}

export default App;