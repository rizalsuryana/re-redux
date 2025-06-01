import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { usersAPI } from '../../api/userService';
import { talksAPI } from '../../api/talkService';
import { talksActionCreator } from '../talks/action';
import { userActionCreator } from '../users/action';

export const shareThunks = {
  asyncPopulateUsersAndTalks: () => async (dispatch) => {
    dispatch(showLoading());

    try {
    //   const users = await usersAPI.getAllUsers();
    //   const talks = await talksAPI.getAllTalks();
      const [users, talks] = await Promise.all([
        usersAPI.getAllUsers(),
        talksAPI.getAllTalks(),
      ]);
      console.log('test talk data');
      console.log('Talks data from API:', talks);  // <--- cek ini
      if (!users || !talks){
        throw new Error('Data users atau talks tidak valid');
      }
      dispatch(userActionCreator.receiveUsers(users));
      dispatch(talksActionCreator.receiveTalks(talks.talks));

    } catch (error){
      alert(error.message);
    }

    dispatch(hideLoading());
  }
};