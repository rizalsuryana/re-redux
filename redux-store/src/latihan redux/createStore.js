const createStore = () => {
  /**
   * Store memiliki 4 hal
   * 1. State
   * 2. Mendapatkan state
   * 3. Men-subscribe perubahan state
   * 4. Memperbarui state
   */

  // Nilai state diharapkan berubah
  //! 1
  let state;
  let listeners = [];

  //! 2
  const getState = () =>  state;

  //! 3 subscribe
  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((listenerItem) => listenerItem !== listener);
    };
  };


  const dispatch = (action) => {
    state = todoReducer(state, action);
    listeners.forEach((listener) => listener());
  };

  //  the store
  return {
    getState,
    subscribe,
    dispatch
  };
};

//  consume
const store = createStore(todoReducer);

// getting the state
store.getState();

// ! subscribe state changed
store.subscribe(() => {
  console.log('state changed!', store.getState());
});

store.dispatch(
  addTodoActionCreator({
    id: 1,
    text: 'Learn React'
  })
);



// !unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log('state changed!');
});

unsubscribe();