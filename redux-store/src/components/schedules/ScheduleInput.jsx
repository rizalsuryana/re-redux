import React, { useState } from 'react';

export const ScheduleInput = ({ addShchedule }) => {
  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input type="text" placeholder='New schedule is...' value={text} onChange={onTextChangeHandler} />
      <button onClick={() => addShchedule(text)}>Add Shchedule</button>
    </div>
  );
};
