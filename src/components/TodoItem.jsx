import React, { useContext } from 'react';
import './TodoItem.css';
import Context from './Contex'


function TodoItem ({id, title, index, completed}) {
  const {onChangeCompleted, onDeleteTodo} = useContext(Context);

  const classSpan = []
  if (completed) {
    classSpan.push('completedItem')
  }

  return(
    <li>
      <span className={classSpan.join(' ')}>
        <input
          type='checkbox'
          checked={completed}
          onChange={()=>{onChangeCompleted(id)}} />

        &nbsp;
        <strong>{index+1}</strong>
        &nbsp;
        {title}
      </span>
      <button
        className='deleteButton'
        onClick={()=>onDeleteTodo(id)}
      >&times;</button>
    </li>
  )
}

export default TodoItem;
