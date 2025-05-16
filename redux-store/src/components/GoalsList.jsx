import React from 'react';
import { GoalItem } from './GoalItem';
import { GoalInput } from './GoalInput';
import { useDispatch, useSelector } from 'react-redux';
import { addGoalActionCreator, deleteGoalActionCreator } from '../states/goals/action';

export const GoalsList = () => {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();


  const onAddGoal = (text) => {
    const id = `goal-${+new Date()}`;
    dispatch(addGoalActionCreator({
      id,
      text
    }));
  };

  const onDeleteGoal = (id) => {
    // TODO: dispatch action DELETE_GOAL
    dispatch(deleteGoalActionCreator(id));
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
