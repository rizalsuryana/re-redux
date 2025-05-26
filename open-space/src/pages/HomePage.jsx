import React, { useEffect } from 'react';
import { TalkInput } from '../components/TalkInput';
import { TalksList } from '../components/TalksList';

export const HomePage = () => {
  const {
    talks = [],
    users = [],
    authUser,
  } = {}; //todo get talks, users, and authUser from store

  const dispatch = null; //@TODO: get dispatch func from store

  useEffect(() => {
    // @TODO: dispatch asyn action to populate talks and users data
  }, [dispatch]);

  const onLike = (id) => {
    // @TODO: dispatch async action to toggle like talk
  };

  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  const onAddTalk = (text) => {
    // @TODO: dispatch async action to add talk
  };
  return (
    <section className="home-page">
      <TalkInput addTalk={onAddTalk} />
      <TalksList talks={talkList} like={onLike} />
    </section>
  );
};
