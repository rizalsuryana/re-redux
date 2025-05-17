import React, { useState } from 'react';

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) =>  setText(target.value);

  return (
    <div>
      <input placeholder='New todo is ...' type="text" value={text} onChange={onTextChangeHandler} />
      <button onClick={() => addTodo(text)}> Add Todo </button>
    </div>
  );
};
