import { api, makeResponseFailed } from './api';

export const talksAPI = {
  getAllTalks: async () => {
    try {
      return await api.get('talks');
    } catch (error) {
      return makeResponseFailed({
        message: error
      });
    }
  },

  getDetailTalks: async (id) => {
    try {
      return await api.get(`talks/${id}`);
    } catch (error) {
      return makeResponseFailed({
        message:error
      });
    }
  },

  createTalk: async ({ text, replyTo='' }) => {
    try {
      return await api.post('talks', {
        text,
        replyTo,
      });
    } catch (error) {
      return makeResponseFailed({
        message:error
      });
    }
  },

  toggleLikeTalk: async (talkId) => {
    try {
      return await api.post('talks/likes', {
        talkId,
      });
    } catch (error) {
      return makeResponseFailed({
        message: error
      });
    }
  }
};