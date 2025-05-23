import React from 'react';

export const TodoItem = ({
  id, text, complete,
  toggleTodo, deleteTodo
}) => {
  return (
    <div>
      <input type="checkbox" onChange={() => toggleTodo(id)} checked={complete}/>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>x</button>
    </div>
  );
};
