import React, { useState } from 'react';

const Card = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        border: '1px solid red',
        borderRadius: '20px',
        padding: '20px',
        margin: '10px',
        transition: 'background 1s, color 1s',
        background: isHovered ? 'pink' : '',
        color: isHovered ? 'black' : '',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{user.name}</p>
      <p>{user.job}</p>
      <p>{user.hobby}</p>
    </div>
  );
};

export default Card;
