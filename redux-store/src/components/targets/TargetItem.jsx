import React from 'react';

export const TargetItem = ({ id, text, complete, toggleTarget, deleteTarget }) => {
  return (
    <div>
      <input type="checkbox" onChange={(() => toggleTarget(id))} checked={complete}/>
      <span>{text}</span>
      <button onClick={(() => deleteTarget(id))}>x</button>
    </div>
  );
};
