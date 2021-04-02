import React, {useState} from 'react';

const styles = {
  form: {
    marginBottom: '1rem',
  }
}

function AddTodo (props) {

  const [value, setValue] = useState('');

  function handlerSubmit(event) {
    event.preventDefault();
    if (value.trim()){
      props.createTodo(value);
      setValue('');
    }
  }

  return(
    <form style={styles.form}
          onSubmit={handlerSubmit}>
      <input
        type='text'
        value={value}
        onChange={(event)=>setValue(event.target.value)} />
      &nbsp;
      <button type='submit'>Add todo</button>

    </form>

  )
}

export default AddTodo;
