import React, { useEffect } from 'react';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { TodosThunks } from '../../states/todos/action';

export const TodosList = () => {

  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodosThunks.asynReceiveTodos());
  }, [dispatch]);

  const onAddTodo = (text) => {
    dispatch(TodosThunks.asyncAddTodo({ text }));
  };

  const onToggleTodo = (id) => {
    dispatch(TodosThunks.asynToggleTodo({ id }));
  };

  const onDeleteTodo = (id) => {
    // TODO: dispatch action DELETE_TODO
    dispatch(TodosThunks.asyncDeleteTodo({ id }));
  };



  return (
    <div>

      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo}/>

      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem {...todo} toggleTodo={onToggleTodo} deleteTodo={onDeleteTodo}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
