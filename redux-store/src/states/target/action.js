export const TargetActionType = {
  ADD_TARGET: 'target/AddTarget',
  DELETE_TARGET: 'target/deleteTarget',
  TOOGLE_TARGET: 'target/toggleTarget'
};


export const addTargetActionCreator = ({ id, text }) => ({
  type: TargetActionType.ADD_TARGET,
  payload: {
    id,
    text,
    complete: false,
  }
});


export const deleteTargetActionCreator = (id) => ({
  type: TargetActionType.DELETE_TARGET,
  payload: {
    id
  }
});


export const toggleTargetActionCreator = (id) => ({
  type: TargetActionType.TOOGLE_TARGET,
  payload: {
    id
  }
});