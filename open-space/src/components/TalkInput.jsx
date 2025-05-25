import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TalkInput = () => {
  const [text, setText] = useState('');

  const addTalk = () => {
    if (text.trim()){
      addTalk(text);
      setText('');
    }
  };

  const handleTextchange = ({ target }) => {
    if (target.value.length <= 320){
      setText(target.value);
    }
  };


  return (
    <div className='talk-input'>
      <textarea type='text' placeholder='thoght?' value={text}
        onChange={handleTextchange}/>
      <p className='talk-input__char-left'>
        <strong>{text.length}</strong>
        /320
      </p>
      <button type='submit' onClick={addTalk}>
        Talk
      </button>
    </div>
  );
};

TalkInput.propTypes = {
  addTalk: PropTypes.func.isRequired,
};
