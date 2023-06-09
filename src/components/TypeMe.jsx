import React, { useState } from 'react';

const TypeMe = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
      {!isFocused && <p style={{ color: 'red' }}>Please type in here!</p>}
    </div>
  );
};

export default TypeMe;
