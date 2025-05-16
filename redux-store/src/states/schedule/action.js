export const ScheduleActionType = {
  ADD_SCHEDULE : 'schedule/Add',
  TOGGLE_SCHEDULU: 'schedule/Toggle',
  DELETE_SCHEDULE: 'schedule/Delete'
};


export const addCheduleActionCreator = ({ id, text }) => ({
  type: ScheduleActionType.ADD_SCHEDULE,
  payload: {
    id,
    text,
    done: false
  }
});


export const toggleScheduleActionCreator = (id) => ({
  type: ScheduleActionType.TOGGLE_SCHEDULU,
  payload: {
    id,
  }
});


export const deleteScheduleActionCreator = (id) => ({
  type: ScheduleActionType.DELETE_SCHEDULE,
  payload: {
    id
  }
});