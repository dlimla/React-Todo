import React from "react";

const Todo = props => {
  return (
    <li 
    	style={props.todo.completed ? {textDecoration: 'line-through'} : null}
    	
    	onClick = {() => 
    		props.toggleTodo(props.todo.id)}>{props.todo.task}</li>
  );
};

export default Todo;