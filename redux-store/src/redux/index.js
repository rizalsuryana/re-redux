/*
Aplication Code
*/


// import { createStore } from './redux.js';
import { createStore } from 'redux';


const addTodoActionCreator = ({ id, text }) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      complete: false,
    }
  };
};


const deleteTodoActionCreator = (id) => {
  return {
    type: 'DELETE_TODO',
    payload:{
      id,
    }
  };
};

const toggleTodoActionCreator = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload:{
      id
    }
  };
};

//  reducer
// !TODO

const todosReducer = (todos = [], action = {}) => {
  switch (action.type){
  case 'ADD_TODO':
    return [...todos, action.payload];

  case 'DELETE_TODO':
    return todos.filter((todo) => todo.id !== action.payload.id);

  case 'TOGGLE_TODO':
    return todos.map((todo) => {
      if (todo.id === action.payload.id){
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

  default:
    return todos;
  }
};

// !Goals
const addGoalActionCreator = ({ id, text }) => {
  return {
    type: 'ADD_GOAL',
    payload: {
      id,
      text
    }
  };
};

const deleteGoalActionCreator = ({ id }) => ({
  type: 'DELETE_GOAL',
  payload:{
    id,
  }
});

// ? Goal Reducer

const goalsReducer = (goals = [], action = {}) => {
  switch (action.type){
  case 'ADD_GOAL':
    return [...goals, action.payload];

  case 'DELETE_GOAL':
    return goals.filter((goal) => goal.id !== action.payload.id);
  }
  return goals;
};

// * root reducer
const rootReducer = (state = {}, action={}) => {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  };
};


// the store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('state changed', store.getState());
});


store.dispatch(
  addTodoActionCreator({
    id: 1,
    text: 'Learn React'
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 2,
    text: 'Learn Redux'
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 3,
    text: 'Learn JavaScript'
  })
);

// delete todo that has id number 3
console.log('delete id 3');
store.dispatch(deleteTodoActionCreator(3));

// change learn react to complete
console.log('learn react complete');
store.dispatch(toggleTodoActionCreator(1));


// Goals
console.log('add first goal');
store.dispatch(
  addGoalActionCreator({
    id: 1,
    text: 'Jago react and redux on may'
  })
);

console.log('add second goal');
store.dispatch(
  addGoalActionCreator({
    id: 2,
    text: 'Mulai kerja bulan Juni'
  })
);

console.log('add thrid goal');
store.dispatch(
  addGoalActionCreator({
    id: 3,
    text: 'hapus'
  })
);

// Delete
console.log('hapus 3');
store.dispatch(deleteGoalActionCreator(3));

console.log('add 4');
store.dispatch(
  addGoalActionCreator({
    id: 4,
    text: 'testing empat'
  })
);