import { TalkDetailActionType } from './action';

export const talkDetailReducer = (talkDetail = null, action = {}) => {
  switch (action.type){
  case TalkDetailActionType.RECEIVE_TALK_DETAIL:
    return action.payload.talkDetail;
  case TalkDetailActionType.CLEAR_TALK_DETAIL:
    return null;
  case TalkDetailActionType.TOGGLE_LIKE_TALK_DETAIL:{
    const likesSet = new Set(talkDetail.likes);
    if (likesSet.has(action.payload.userId)){
      likesSet.delete(action.payload.userId);
    } else {
      likesSet.add(action.payload.userId);
    }
    return {
      ...talkDetail,
      likes: [...likesSet]
    };
  }
  default:
    return talkDetail;
  }
};