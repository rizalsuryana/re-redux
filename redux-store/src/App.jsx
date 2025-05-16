import React from 'react';
import { GoalsList } from './components/GoalsList';
import { TodosList } from './components/TodosList';

const App = () => {
  return (
    <div>
      <TodosList/>
      <GoalsList/>
    </div>
  );
};

export default App;