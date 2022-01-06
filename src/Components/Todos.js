import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'

class Todos extends React.Component {


    render() { // required lifecycle method
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo => {
            return  (
                <TodoItem  key={todo.id} todo={todo} />
            )
        });
    }
        console.log(this.props)
        return (
            <div className="Todos">
            <h3>Latest Todos</h3>
                {todoItems}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array,
}


export default Todos;