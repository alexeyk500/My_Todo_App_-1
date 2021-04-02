import React, {useState, useEffect}from 'react';
import TodoList from './TodoList';
import Context from './Contex';
import AddTodo from './AddTodo';
import Loader from './Loader'

const styles = {
  wrapper: {
    paddingTop: '1rem',
    margin: '0 auto',
    width: '600px'
  },

  header: {
    textAlign: 'center',
  },
}


function App() {

  // const [todos, setTodo] = useState([
  //   {id:1, title: 'Купить хлеба', completed: false},
  //   {id:2, title: 'Купить молоко', completed: true},
  //   {id:3, title: 'Купить рыбу', completed: false},
  // ])

  const [todos, setTodo] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((response) => response.json())
    .then((todos) => {
      setLoading(false);
      setTodo(todos)});
  },[])

  function onChangeCompleted (id) {
    setTodo(
      todos.map(todo=>{
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function onDeleteTodo (id) {
    setTodo(
      todos.filter(todo=>todo.id!==id)
    )
  }

  function createTodo (value) {
    setTodo(
      [...todos, {id: new Date(), title: value, completed: false}]
    )
  }

  return (
    <Context.Provider value={{onChangeCompleted, onDeleteTodo}}>
      <div style={styles.wrapper}>
        <h2 style={styles.header}>My todo list</h2>
        <AddTodo createTodo={createTodo} />
        {loading && <Loader />}
        {todos.length? <TodoList todos={todos} />
          :loading? null
            :<p>Nothing to do</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
