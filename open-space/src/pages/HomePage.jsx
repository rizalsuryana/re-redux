import React, { useEffect } from 'react';
import { TalkInput } from '../components/TalkInput';
import { TalksList } from '../components/TalksList';
import { useSelector, useDispatch } from 'react-redux';
import { shareThunks } from '../states/shared/action';
import { TalksThunks } from '../states/talks/action';

export const HomePage = () => {
  // const {
  //   talks = [],
  //   users = [],
  //   authUser,
  // } = useSelector((states) => states); //todo get talks, users, and authUser from store
  // const { talks = [], users= [], authUser = {} } = useSelector((states) => ({
  //   talks: states.talks ?? [],
  //   users: states.users?.users ?? [],
  //   authUser: states.authUser?.authUser ?? {},
  // }));

  const talks = useSelector((states) => states.talks);
  const users = useSelector((states) => states.users?.users || []);
  const authUser = useSelector((states) => states.auth?.authUser || {});


  const dispatch = useDispatch(); //@TODO: get dispatch func from store

  useEffect(() => {
    // @TODO: dispatch asyn action to populate talks and users data
    dispatch(shareThunks.asyncPopulateUsersAndTalks());
  }, [dispatch]);

  const onLike = (id) => {
    console.log('Like clicked', id); // ⬅️ Apakah muncul?
    // @TODO: dispatch async action to toggle like talk
    dispatch(TalksThunks.asyncToggleLikeTalk({ talkId: id }));

  };

  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  const onAddTalk = (text) => {
    // @TODO: dispatch async action to add talk
    dispatch(TalksThunks.asyncAddTalk({ text }));
  };

  return (
    <section className="home-page">
      <TalkInput addTalk={onAddTalk} />
      <TalksList talks={talkList} onLike={onLike} />
    </section>
  );
};
