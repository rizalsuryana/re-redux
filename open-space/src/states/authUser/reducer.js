import { AuthActionType } from './action';

export const authUserReducer = (authUser = null, action ={}) => {

  switch (action.type){
  case AuthActionType.SET_AUTH_USER:
    return action.payload.authUser;
  case AuthActionType.UNSET_AUTH_USER:
    return null;
  default:
    return authUser;
  }
};