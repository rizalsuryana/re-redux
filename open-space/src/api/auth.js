import { api, makeResponseFailed } from './api';
import { tokenHandler } from '../utils/accessToken';

export const authAPI = {
  register: async ({ id, name, password }) => {
    try {
      return await api.post('users', {
        id, name, password,
      });
    } catch (error){
      return makeResponseFailed({
        message: error,
      });
    }
  },

  login: async ({ id, password }) => {
    try {
      const { token } = await api.post('login', {
        id, password,
      });
      tokenHandler.set(token);
      return { token };
    } catch (error){
      return makeResponseFailed({
        message: error
      });
    }
  }
};