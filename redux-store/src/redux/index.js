/*
Aplication Code
*/


import { createStore } from './redux.js';


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
const addGoalActionCreator = ({id, text}) => {
    return{
        type: 'ADD_GOAL',
        payload: {
            id,
            text
        }
    }
}

const detleGoalActionCreator = ({id}) => ({
    type: 'DELETE_GOAL',
    payload:{
        id
    }
})

// ? Goal Reducer

const goalsReducer = (goals = [], action = {}) => {
    switch(action.type){
        case 'ADD_GOAL':
            return [...goals, action.payload]

            case 'DELETE_GOAL':
            return goals.filter((goal) => goal.id !== action.payload.id)
    }
    return goals;
}


// the store
const store = createStore(todosReducer);

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
console.log('delete id 3')
store.dispatch(deleteTodoActionCreator(3));

// change learn react to complete
console.log('learn react complete')
store.dispatch(toggleTodoActionCreator(1));