import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { authAPI } from '../../api/authService';
import { usersAPI } from '../../api/userService';
import { tokenHandler } from '../../utils/accessToken';


export const AuthActionType = {
  SET_AUTH_USER: 'auth/set',
  UNSET_AUTH_USER: 'auth/unset'
};


export const authUserActionCreator = {
  set: async (authUser) => ({
    type: AuthActionType.SET_AUTH_USER,
    payload: {
      authUser,
    }
  }),

  unset: async () => ({
    type: AuthActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    }
  })
};


export const authUserThunks = {
  asyncSetAuthUser: ({ id, password }) => async (dispatch) => {
    dispatch(showLoading());
    const { status, message, token } = await authAPI.login({ id, password });

    if (status === 'failed'){
      dispatch(hideLoading());
      throw new Error(message);
    }
    tokenHandler.set(token);

    const authUser = await usersAPI.getOwnProfile();
    dispatch(authUserActionCreator.set(authUser));
    dispatch(hideLoading());
  },

  asyncUnsetAuthUser:() => async (dispatch) => {
    dispatch(showLoading());
    tokenHandler.unset();
    dispatch(authUserActionCreator.unset());
    dispatch(hideLoading());
  }
};
