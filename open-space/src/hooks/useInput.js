import React, { useState } from 'react';

export const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  return [value, handleValueChange, setValue];
};
