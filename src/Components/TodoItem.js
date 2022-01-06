import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
   
    render() { // required lifecycle method
        console.log(this.props)
        return (
            <li className="Todos">
                <strong>{this.props.todo.title}</strong> 
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object,
}


export default TodoItem;
