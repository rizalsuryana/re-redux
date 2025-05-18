import React, { useState } from 'react';

export const TargetInput = ({ addTarget }) => {

  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input type="text" placeholder='your target is...' value={text} onChange={onTextChangeHandler}/>
      <button onClick={(() => addTarget(text))}>Add Target</button>
    </div>
  );
};
