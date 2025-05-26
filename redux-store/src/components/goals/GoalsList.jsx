import React, { useEffect } from 'react';
import { GoalItem } from './GoalItem';
import { GoalInput } from './GoalInput';
import { useDispatch, useSelector } from 'react-redux';
import { GoalsThunks } from '../../states/goals/action';

export const GoalsList = () => {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GoalsThunks.asyncReceiveGoals());
  }, [dispatch]);


  const onAddGoal = (text) => {
    dispatch(GoalsThunks.asyncaddGoals({ text }));
  };

  const onDeleteGoal = (id) => {
    // TODO: dispatch action DELETE_GOAL
    dispatch(GoalsThunks.asyncDeleteGoals({ id }));
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
