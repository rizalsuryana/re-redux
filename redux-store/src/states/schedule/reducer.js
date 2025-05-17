import { ScheduleActionType } from './action';

export const scheduleReducer = (schedules = [], action = {}) => {
  switch (action.type){
  case ScheduleActionType.ADD_SCHEDULE:
    return [...schedules, action.payload];

  case ScheduleActionType.DELETE_SCHEDULE:
    return schedules.filter((schedule) => schedule.id !== action.payload.id);

  case ScheduleActionType.TOGGLE_SCHEDULU:
    return schedules.map((schedule) => {
      if (schedule.id === action.payload.id){
        return { ...schedule, done: !schedule.done };
      }
      return schedule;
    });

  default:
    return schedules;
  }
};