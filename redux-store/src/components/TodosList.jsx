import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoActionCreator, toggleTodoActionCreator, deleteTodoActionCreator } from '../states/todos/action';

export const TodosList = () => {

  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  const onAddTodo = (text) => {
    const id = `todo-${+new Date()}`;

    dispatch(addTodoActionCreator({
      id,
      text
    }));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodoActionCreator(id));
  };

  const onDeleteTodo = (id) => {
    // TODO: dispatch action DELETE_TODO
    dispatch(deleteTodoActionCreator(id));
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
