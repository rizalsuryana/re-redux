import { UserActionType } from './action';

export const userReducer = (users = [], action = {}) => {
  switch (action.type){
  case UserActionType.RECEIVE_USERS:
    return action.payload.users;
  default:
    return users;
  }
};