import React, { useState } from 'react';
import './App.css'; // Ensure you have a CSS file for styles

function NumberBox({ number, handleClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickInternal = () => {
    setIsClicked(true);
    handleClick(number);
    setTimeout(() => {
      setIsClicked(false);
    }, 10);
  };

  return (
    <div
      className={isClicked ? 'numberBoxClicked' : 'numberBox'}
      onClick={handleClickInternal}
    >
      {number}
    </div>
  );
}

export default NumberBox;
