import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ['spaghetti', 'ice cream', 'sushi', 'pizza', 'cereal', 'tacos']
    }
  }

  render() {
    let showArr = this.state.arr.map(elem => <h2>{elem}</h2>)

    return (
      <div className="App">{showArr}</div>
    )
  }
}

export default App;
