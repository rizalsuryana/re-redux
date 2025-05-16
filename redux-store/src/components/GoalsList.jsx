import React from 'react';
import { GoalItem } from './GoalItem';
import { GoalInput } from './GoalInput';

export const GoalsList = () => {
  const goals = []; //TODO: Get goals from store

  const onAddGoal = (text) => {
    // TODO: dispatch action ADD_GOAL
  };

  const onDeleteGoal = (id) => {
    // TODO: dispatch action DELETE_GOAL
  };

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal}/>

      <ul>
        {
          goals.map((goal) => (
            <li key={goal.id}>
              <GoalItem {...goal} deleteGoal={onDeleteGoal}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
