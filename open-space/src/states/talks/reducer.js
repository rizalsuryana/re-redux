import { TalksActionType } from './action';

export const talksReducer = (talks = [], action = {}) => {
  switch (action.type){
  case TalksActionType.RECEIVE_TALKS:
    return [...action.payload.talks];
  case TalksActionType.ADD_TALK:
    return [action.payload.talk, ...talks];
  case TalksActionType.TOGGLE_LIKE_TALK:{
    const { talkId, userId } = action.payload;

    return talks.map((talk) => {
      if (talk.id !== talkId){
        return talk;
      }
      console.log('[Reducer] Talk before toggle:', talk);
      const hasLiked = talk.likes.includes(userId);
      console.log('[Reducer] hasLiked:', hasLiked);
      const updateLikes = hasLiked
        ? talk.likes.filter((id) => id !== userId)
        : [...talk.likes, userId];

      return {
        ...talk,
        likes: updateLikes
      };
    });
  }
  default:
    return talks;
  }
};