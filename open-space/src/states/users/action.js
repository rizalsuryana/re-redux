import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { authAPI } from '../../api/authService';

export const UserActionType = {
  RECEIVE_USERS: 'users/receiveUsers',
};

export const userActionCreator = {
  receiveUsers: (users) => ({
    type: UserActionType.RECEIVE_USERS,
    payload: {
      users,
    }
  })
};


export const UsersThunks = {
  asyncRegisterUser: ({ id, name, password }) => async (dispatch) => {
    dispatch(showLoading());
    const { status, message } = await authAPI.register({ id, name, password });

    if (status === 'failed'){
      dispatch(hideLoading());
      throw new Error(message);
    }
    dispatch(hideLoading());
  }
};