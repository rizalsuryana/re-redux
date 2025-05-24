import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { talksAPI } from '../../api/talkService';

export const TalksActionType = {
  RECEIVE_TALKS: 'talks/receiveTalks',
  ADD_TALK: 'talks/addTalk',
  TOGGLE_LIKE_TALK: 'talks/toggleLikeTalk'
};

export const talksActionCreator = {
  receiveTalks: (talks) => ({
    type: TalksActionType.RECEIVE_TALKS,
    payload: {
      talks,
    }
  }),

  addTalk: (talk) => ({
    type: TalksActionType.ADD_TALK,
    payload: {
      talk,
    }
  }),

  toggleLikeTalk: ({ talkId, userId }) => ({
    type: TalksActionType.TOGGLE_LIKE_TALK,
    payload: {
      talkId,
      userId,
    }
  })
};

// The Thunks

export const TalksThunks = {
  asyncAddTalk: ({ text, replyTo='' }) => async (dispatch) => {
    dispatch(showLoading());
    const { status, message, talk } = await talksAPI.createTalk({ text, replyTo });
    if (status ==='failed'){
      dispatch(hideLoading());
      throw new Error(message);
    }
    dispatch(talksActionCreator.addTalk(talk));
    dispatch(hideLoading());
  },

  asyncToggleLikeTalk: ({ talkId }) => async (dispatch, getState) => {
    dispatch(showLoading());
    const { auth } = getState();
    dispatch(talksActionCreator.toggleLikeTalk({ talkId, userId: auth.id }));
    const { status, message } = await talksAPI.toggleLikeTalk(talkId);

    if (status === 'failed'){
      dispatch(talksActionCreator.toggleLikeTalk({ talkId, userId: auth.id })); //rollback
      dispatch(hideLoading());
      throw new Error(message);
    }
    dispatch(hideLoading());
  }

};