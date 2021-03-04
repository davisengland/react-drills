import React, {Component} from 'react';
import Todo from './Components/Todo'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      list: []
    }

    this.addTodo = this.addTodo.bind(this)
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  addTodo() {
    this.setState({list: [...this.state.list, this.state.userInput], userInput: ''})
  }

  render() {
    let arr = this.state.list.map(elem => <Todo task={elem}/>)

    return (
      <div className="App">
        <div>
          <h1>My to-do list:</h1>
          <div>
            <input value={this.state.userInput} onChange={event => this.handleChange(event.target.value)} placeholder="Enter task"/>
            <button onClick={this.addTodo}>Add</button>
          </div>
        </div>
        <br/>
        {arr}
      </div>
    )
  }
}

export default App;
