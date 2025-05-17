import React from 'react';
import { GoalsList } from './components/goals/GoalsList';
import { TodosList } from './components/todos/TodosList';
import { SchedulesList } from './components/schedules/SchedulesList';
import { TargetsList } from './components/targets/TargetsList';
const App = () => {
  return (
    <div>
      <TodosList/>
      <GoalsList/>
      <SchedulesList/>
      <TargetsList/>
    </div>
  );
};

export default App;