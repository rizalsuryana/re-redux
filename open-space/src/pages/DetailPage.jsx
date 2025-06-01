import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TalkDetail } from '../components/TalkDetail';
import { TalkItem } from '../components/TalkItem';
import { TalkReplyInput } from '../components/TalkReplyInput';
import { useSelector, useDispatch } from 'react-redux';
import { TalkDetailThunks } from '../states/talkDetail/action';
import { TalksThunks } from '../states/talks/action';

export const DetailPage = () => {
  const { id } = useParams();
  const {
    talkDetail = null,
    authUser,
  } = useSelector((states) => states); //TODO: get talk detail and suth user from store
  const dispatch = useDispatch(); //TODO

  useEffect(() => {
    // @todo: DISPATCH ASYNC ACTION TO GET TALK DETAIL BY ID
    dispatch(TalkDetailThunks.asyncReceiveTalkDetail(id));
  }, [id, dispatch]);

  const onLikeTalk = () => {
    // @TODO: dispatch async action to toggle like talk detail
    dispatch(TalkDetailThunks.asyncToggleLikeTalkDetail());

  };

  const onReplyTalk = (text) => {
    // @TODO: dispatch async action to add reply talk
    dispatch(TalksThunks.asyncAddTalk({ text, replyTo: id }));

  };

  if (!talkDetail) {
    return null;
  }


  return (
    <section className="detail-page">
      {
        talkDetail.parent && (
          <div className="detail-page__parent">
            <h3>Replying To</h3>
            <TalkItem {...talkDetail.parent} authUser={authUser.id} />
          </div>
        )
      }
      <TalkDetail {...talkDetail} authUser={authUser.id} likeTalk={onLikeTalk} />
      <TalkReplyInput replyTalk={onReplyTalk} />
    </section>
  );
};
