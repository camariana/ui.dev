import React, { useState } from 'react';

/* 
  Create a 'todo' app with the folowing criteria
    1. The user can add a new to todo items
    2. the user can remove todo items
*/

const generateId = () => {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault()

    const todoObject = {
      content: newTodo,
      date: new Date().toISOString(),
      id: generateId()
    }

    setTodos((todos) => todos.concat(todoObject));
    setNewTodo('');
  }

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id))
  }

  
  return (
    <div>
      <form onSubmit={addTodo}>
        <input 
          type="text"
          value={newTodo} 
          placeholder="enter a new todo item" 
          onChange={handleTodoChange} 
        />
        <button type="submit">Save</button>
      </form>

      <ul>
        {todos.map(({content, id}) => 
          <li key={id}>
            <span>{content}</span>
            <button onClick={() => removeTodo(id)}>x</button>
          </li>  
        )}
      </ul>
    </div>
  )

}

export default App;