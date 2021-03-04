import React, {Component} from 'react'

class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
        
        this.addTask = this.addTask.bind(this)
    }

    inputChange(val) {
        this.setState({userInput: val})
    }

    addTask() {
        this.props.add(this.state.userInput)
        this.setState({userInput: ''})
    }

    render() {
        return(
            <div>
                <input value={this.state.userInput} onChange={event => this.inputChange(event.target.value)} placeholder="Enter new task"/>
                <button onClick={this.addTask}>Add</button>
          </div>
        )
    }
}

export default NewTask