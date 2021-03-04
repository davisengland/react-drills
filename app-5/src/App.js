import React, {Component} from 'react';
import Image from './Components/Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"}/>
      </div>
    )
  }
}

export default App;
