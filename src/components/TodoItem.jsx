import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, deleteTodo, toggleCompletion }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleCompletion(todo.name)}>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.name)}>Delete</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired
};

export default TodoItem;
