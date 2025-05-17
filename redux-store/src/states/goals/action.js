export const GoalsActionType = {
  ADD_GOAL: 'goals/addGoal',
  DELETE_GOAL: 'goals/deleteGoal'
};

export const addGoalActionCreator = ({ id, text }) => ({
  type: GoalsActionType.ADD_GOAL,
  payload: {
    id,
    text
  }
});
export const deleteGoalActionCreator = (id) => ({
  type: GoalsActionType.DELETE_GOAL,
  payload: {
    id
  }
});