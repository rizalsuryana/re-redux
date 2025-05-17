import React from 'react';
import { GoalsList } from './components/goals/GoalsList';
import { TodosList } from './components/todos/TodosList';
import { SchedulesList } from './components/schedules/SchedulesList';

const App = () => {
  return (
    <div>
      <TodosList/>
      <GoalsList/>
      <SchedulesList/>
    </div>
  );
};

export default App;