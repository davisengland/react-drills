import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      arr: ['spaghetti', 'ice cream', 'sushi', 'pizza', 'cereal', 'tacos']
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  render() {
    let newArr = this.state.arr.filter(elem => elem.includes(this.state.userInput)).map(elem => <h2>{elem}</h2>)

    return (
      <div className="App">
        <input onChange={event  => this.handleChange(event.target.value)}/>
        {newArr}
      </div>
    )
  }
}

export default App;
