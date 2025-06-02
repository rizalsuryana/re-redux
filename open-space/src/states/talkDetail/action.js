import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { talksAPI } from '../../api/talkService';

export const TalkDetailActionType = {
  RECEIVE_TALK_DETAIL: 'talkDetail/receiveTalkDetail',
  CLEAR_TALK_DETAIL: 'talkDetail/clearTalkDetail',
  TOGGLE_LIKE_TALK_DETAIL: 'talkDetail/toggleLikeTalkDetail'
};

export const talkDetailActionCreator = {
  receiveTalkDetail: (talkDetail) => ({
    type: TalkDetailActionType.RECEIVE_TALK_DETAIL,
    payload: {
      talkDetail
    }
  }),

  clearTalkDetail: () => ({
    type: TalkDetailActionType.CLEAR_TALK_DETAIL,
  }),

  toggleLikeTalk: (userId) => ({
    type: TalkDetailActionType.TOGGLE_LIKE_TALK_DETAIL,
    payload: {
      userId,
    }
  })
};


export const TalkDetailThunks = {
  asyncReceiveTalkDetail: (talkId) => async (dispatch) => {
    dispatch(showLoading());
    dispatch(talkDetailActionCreator.clearTalkDetail());
    try {
      const { status, message, talkDetail } = await talksAPI.getDetailTalks(talkId);
      if (status === 'failed'){
        dispatch(hideLoading());
        throw new Error(message);
      }
      dispatch(talkDetailActionCreator.receiveTalkDetail(talkDetail));
    }
    catch (error){
      alert(error.message);
    }
    dispatch(hideLoading());
  },

  asyncToggleLikeTalkDetail: () => async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, talkDetail } = getState();
    dispatch(talkDetailActionCreator.toggleLikeTalk(authUser.id));

    try {
      const { status, message } = await talksAPI.toggleLikeTalk(talkDetail.id);
      if (status === 'failed'){
        dispatch(hideLoading());
        dispatch(talkDetailActionCreator.toggleLikeTalk(authUser.id)); //roll back?
        throw new Error(message);
      }
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  }
};