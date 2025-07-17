import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="buttons">
        <button onClick={() => toggleTodo(todo.id)} className="complete-btn">
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
