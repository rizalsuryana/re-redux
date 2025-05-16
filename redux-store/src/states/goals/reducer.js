import { GoalsActionType } from './action';

export const goalReducer = (goals = [], action = {}) => {
  switch (action.type){
  case GoalsActionType.ADD_GOAL:
    return [...goals, action.payload];

  case GoalsActionType.DELETE_GOAL:
    return goals.filter((goal) => goal.id !== action.payload.id);

  default:
    return goals;
  }
};