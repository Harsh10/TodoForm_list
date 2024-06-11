import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleCompletion }) {
  if (!todos || !Array.isArray(todos)) {
    return null;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired
};

export default TodoList;
