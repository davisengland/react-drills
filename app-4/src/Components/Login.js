import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
          username: '',
          password: ''
        }
      }
    
      setUsername(val) {
        this.setState({username: val})
      }
    
      setPassword(val) {
        this.setState({password: val})
      }
    
      render() {
        return (
            <div>
                <input onChange={event => this.setUsername(event.target.value)}/>
                <input onChange={event => this.setPassword(event.target.value)}/>
                <button onClick={() => alert(`Username: ${this.state.username} Password: ${this.state.password}`)}>Login</button>
            </div>
        )
      }
}

export default Login