import { mockAPI } from '../../data/mockAPI';

export const TodosActionType = {
  ADD_TODO: 'todos/addTodo',
  DELETE_TODO: 'todos/deleteTodo',
  TOGGLE_TODO: 'todos/toggleTodo',
  RECEIVE_TODOS: 'todos/receiveTodos',
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

export const receiveTodosActionCreator = (todos) => ({
  type: TodosActionType.RECEIVE_TODOS,
  payload: {
    todos,
  }
});


// Thunk
export const TodosThunks = {
  asynReceiveTodos: () =>  async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(receiveTodosActionCreator(todos));
  },

  asyncAddTodo: ({ text }) => async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  },

  asyncDeleteTodo: ({ id }) => async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  },

  asynToggleTodo: ({ id }) => async (dispatch) => {
    dispatch(toggleTodoActionCreator(id));
    try {
      await mockAPI.toggleTodo(id);
    } catch (error){
      alert(error.message);
      dispatch(toggleTodoActionCreator(id));
    }
  }
};
