import React from 'react';

export const ScheduleItem = ({ id, text, done, toggleSchedule, deleteSchedule }) => {
  return (
    <div>
      <input type="checkbox" onChange={() =>toggleSchedule(id)} checked={done} />
      <span>{text}</span>
      <button onClick={() => deleteSchedule(id)}>x</button>
    </div>
  );
};
