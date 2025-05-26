import { mockAPI } from '../../data/mockAPI';

export const GoalsActionType = {
  ADD_GOAL: 'goals/addGoal',
  DELETE_GOAL: 'goals/deleteGoal',
  RECEIVE_GOALS: 'goals/receiveGoals',
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

export const receiveGoalsActionCreator = (goals) => ({
  type: GoalsActionType.RECEIVE_GOALS,
  payload: {
    goals,
  }
});


// Thunk
export const GoalsThunks = {
  asyncaddGoals: ({ text }) => async (dispatc) =>  {
    const { id } = await mockAPI.addGoal(text);
    dispatc(addGoalActionCreator({ id, text }));
  },

  asyncReceiveGoals: () => async (dispatch) =>  {
    const goals = await mockAPI.getGoals();
    dispatch(receiveGoalsActionCreator(goals));
  },

  asyncDeleteGoals: ({ id }) => async (dispatc) => {
    await mockAPI.deleteGoal();
    dispatc(deleteGoalActionCreator(id));
  }
};