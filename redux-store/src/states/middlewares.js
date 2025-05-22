import { TodosActionType } from './todos/action';
import { ScheduleActionType } from './schedule/action';
import { TargetActionType } from './target/action';


const todoDeletionCheck = (store) => {
  return (next) => (action) => {

    switch (action.type){
    case TodosActionType.DELETE_TODO:{
      const { todos } = store.getState();
      const todosToBeDeleted = todos.find((todo) => todo.id === action.payload.id);

      if (!todosToBeDeleted.complete){
        alert('can\'t delete incomplete todo');
        return;
      }
    }
      break;
    case ScheduleActionType.DELETE_SCHEDULE: {
      const { schedules } = store.getState();
      const schedulesToBeDeleted = schedules.find((schedule) => schedule.id === action.payload.id);

      if (!schedulesToBeDeleted.done){
        alert('can\'t delete incomplete shcedule');
        return;
      }
    }
      break;
    case TargetActionType.DELETE_TARGET: {
      const { targets } = store.getState();
      const targetsToBeDeleted = targets.find((target) => target.id === action.payload.id);

      if (!targetsToBeDeleted.complete){
        alert('can\'t delete incomplete target');
        return;
      }
    }
      break;
    }
    return next(action);
  };
};

export { todoDeletionCheck };
