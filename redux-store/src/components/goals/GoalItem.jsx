import React from 'react';

export const GoalItem = ({ id, text, deleteGoal }) => {
  return (
    <div>

      <span>{text}</span>
      <button onClick={() => deleteGoal(id)}>Delete</button>
    </div>
  );
};
