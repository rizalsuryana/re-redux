import { goalReducer } from './goals/reducer';
import { scheduleReducer } from './schedule/reducer';
import { todosReducer } from './todos/reducer';
import { targetReducer } from './target/reducer';

export const rootReducer = (state = {}, action = {}) => ({
  todos: todosReducer(state.todos, action),
  goals: goalReducer(state.goals, action),
  schedules: scheduleReducer(state.schedules, action),
  targets: targetReducer(state.targets, action),
});