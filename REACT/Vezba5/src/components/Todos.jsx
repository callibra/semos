import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

export const Todos = ({listOfTodos,markTodoAsDone,deleteTodo}) => {
    return(
        <ol>
            {listOfTodos.map(todo=>{
                return(
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input
                            type='checkbox'
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>{markTodoAsDone(todo)}}
                        />
                        <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                    </li>
                )
            })}
        </ol>
    )
}

Todos.propTypes={
    listOfTodos:PropTypes.arrayOf(PropTypes.object).isRequired,
    markTodoAsDone:PropTypes.func,
    deleteTodo: PropTypes.func
}