import React, { useState } from 'react';
import './App.css';

function App() {
  // The state of todos list
  const [todos, setTodos] = useState([]);

  // Function for switching state of todos
  const toggleTodoCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Adding a new todo_
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const todoInput = event.target.elements.todoInput;
    const todoText = todoInput.value.trim();
    if (todoText) {
      setTodos([...todos, { text: todoText, completed: false }]);
      todoInput.value = '';
    }
  };

  return (
      <div className="App">
        <div className="todo-list">
          {todos.map((todo, index) => (
              <div
                  key={index}
                  className={todo.completed ? "todo-item completed" : "todo-item"}
                  onClick={() => toggleTodoCompletion(index)}
              >
                {todo.text}
              </div>
          ))}
        </div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="todoInput" placeholder="Enter todo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
  );
}

export default App;
