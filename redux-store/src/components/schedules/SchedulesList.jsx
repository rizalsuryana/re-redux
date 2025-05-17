import React from 'react';
import { ScheduleInput } from './ScheduleInput';
import { ScheduleItem } from './ScheduleItem';
import { useDispatch, useSelector } from 'react-redux';
import { addScheduleActionCreator, deleteScheduleActionCreator, toggleScheduleActionCreator } from '../../states/schedule/action';

export const SchedulesList = () => {
  const schedules = useSelector((states) => states.schedules);

  const dispatch = useDispatch();

  const onAddSchedule = (text) => {
    const id = `schedule-${+new Date()}`;

    dispatch(addScheduleActionCreator({
      id,
      text
    }));
  };

  const  onToggleShedule = (id) =>{
    dispatch(toggleScheduleActionCreator(id));
  };

  const onDeleteShedule = (id) => {
    dispatch(deleteScheduleActionCreator(id));
  };

  return (
    <div>
      <h3>My Schedules</h3>

      <ScheduleInput addShchedule={onAddSchedule}/>
      <ul>
        {
          schedules.map((schedule) => (
            <li key={schedule.id}>
              <ScheduleItem {...schedule} toggleSchedule={onToggleShedule} deleteSchedule={onDeleteShedule}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
