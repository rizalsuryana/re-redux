import { api, makeResponseFailed } from './api';

export const usersAPI = {
  getAllUsers: async () => {
    try {
      return await api.get('users');
    } catch (error){
      return makeResponseFailed({
        message: error,
      });
    }
  },

  getOwnProfile: async () => {
    try {
      return await api.get('users/me');
    } catch (error) {
      return makeResponseFailed({
        message: error
      });
    }
  }
};













