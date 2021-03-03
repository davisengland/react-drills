import React, {Component} from 'react'

class TextBox extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    render() {
        return (
            <div className='body'>
                <input className='input' onChange={event => this.handleChange(event.target.value)}/>
                <p className='output'>{this.state.userInput}</p>
            </div>
        )
    }
}

export default TextBox