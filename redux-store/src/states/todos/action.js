export const TodosActionType = {
  ADD_TODO: 'todos/addTodo',
  DELETE_TODO: 'todos/deleteTodo',
  TOGGLE_TODO: 'todos/toggleTodo'
};

export const addTodoActionCreator = ({ id, text }) => ({
  type: TodosActionType.ADD_TODO,
  payload: {
    id,
    text,
    complete: false,
  }
});


export const deleteTodoActionCreator = (id) => ({
  type: TodosActionType.DELETE_TODO,
  payload: {
    id
  }
});


export const toggleTodoActionCreator = (id) => ({
  type: TodosActionType.TOGGLE_TODO,
  payload: {
    id,
  }
});