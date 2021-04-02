import React from 'react';
import TodoItem from './TodoItem';

function TodoList (props) {
  return(
    <ul style={{padding: '0px'}}>
      {
        props.todos.map((todo, index)=>{
          return <TodoItem
            key = {todo.id}
            id = {todo.id}
            title={todo.title}
            index={index}
            completed={todo.completed}/>
        })
      }
    </ul>
  )
}

export default TodoList;
