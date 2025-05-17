import React, { useState } from 'react';

export const GoalInput = ({ addGoal }) => {
  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input placeholder='New goal is ...' type='text' value={text} onChange={onTextChangeHandler}/>
      <button onClick={() => addGoal(text)}>Add Goal</button>
    </div>
  );
};
