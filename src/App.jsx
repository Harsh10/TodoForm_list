import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoName) => {
    setTodos(todos.filter(todo => todo.name !== todoName));
  };

  const toggleCompletion = (todoName) => {
    setTodos(todos.map(todo =>
      todo.name === todoName ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do List</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompletion={toggleCompletion} />
    </div>
  );
}

export default App;
