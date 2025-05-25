import React from 'react';
import { LoadingBar } from 'react-redux-loading-bar';

export const Loading = () => {
  return (
    <div className='loading'>
      {/* @TODO: use react-redux loading bar to show laoding bar */}
      <LoadingBar/>
    </div>
  );
};
