import React, {Component} from 'react'
import Todo from './Todo'

class List extends Component {
    render() {
        let arr = this.props.todoList.map((elem, i) => <Todo key={i} todo={elem}/>)

        return <div>{arr}</div>
    }
}

export default List