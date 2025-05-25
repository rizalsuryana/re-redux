import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { usersAPI } from '../../api/userService';
import { tokenHandler } from '../../utils/accessToken';
import { authUserActionCreator } from '../authUser/action';

export const IsPreloadActionType = {
  SET_IS_PRELOAD: 'preload/set'
};

export const isPreloadActionCreator = {
  set:(isPreload) => ({
    type: IsPreloadActionType.SET_IS_PRELOAD,
    payload: {
      isPreload
    }
  })
};

export const isPreloadThunks = {
  asyncPreload: () => async (dispatch) => {
    dispatch(showLoading());
    try {
      let user = null;

      if (tokenHandler.has()){
        const { status, data } = await usersAPI.getOwnProfile();
        if (status !=='failed'){
          user =  data;
        }
      }
      dispatch(authUserActionCreator.set(user));
    } catch (error) {
      dispatch(authUserActionCreator.set(null));
    } finally {
      dispatch(isPreloadActionCreator.set(false));
      dispatch(hideLoading());
    }
  }
};

