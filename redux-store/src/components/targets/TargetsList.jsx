import React from 'react';
import { TargetInput } from './TargetInput';
import { TargetItem } from './TargetItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTargetActionCreator, deleteTargetActionCreator, toggleTargetActionCreator } from '../../states/target/action';

export const TargetsList = () => {

  const targets = useSelector((states) => states.targets);
  const dispatch = useDispatch();

  const onAddTarget = (text) => {
    const id = `target-${+new Date()}`;
    dispatch(addTargetActionCreator({
      id,
      text
    }));
  };

  const onToggleTarget = (id) => {
    dispatch(toggleTargetActionCreator(id));
  };

  const onDeleteTarget = (id) => {
    dispatch(deleteTargetActionCreator(id));
  };


  return (
    <div>
      <h3>My Targets: </h3>
      <TargetInput addTarget={onAddTarget}/>
      <ul>
        {
          targets.map((target) => (
            <li key={target.id}>
              <TargetItem {...target} toggleTarget={onToggleTarget} deleteTarget={onDeleteTarget}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
