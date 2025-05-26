import { TodosActionType } from './action';

export const todosReducer = (todos = [], action={}) => {
  switch (action.type){
  case TodosActionType.ADD_TODO:
    return [...todos, action.payload];

  case TodosActionType.DELETE_TODO:
    return todos.filter((todo) => todo.id !== action.payload.id);

  case TodosActionType.TOGGLE_TODO:
    return todos.map((todo) => {
      if (todo.id === action.payload.id){
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

  case TodosActionType.RECEIVE_TODOS:
    return action.payload.todos;

  default:
    return todos;
  }
};