import { goalReducer } from './goals/reducer';
import { todosReducer } from './todos/reducer';

export const rootReducer = (state = {}, action = {}) => ({
  todos: todosReducer(state.todos, action),
  goals: goalReducer(state.goals, action)
});