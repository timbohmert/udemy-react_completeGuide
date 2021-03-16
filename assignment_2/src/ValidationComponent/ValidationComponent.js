import React from 'react';

const validation = (props) => {
  let valStatement = 'Please enter some text';
  if (props.length < 5 && props.length > 0) {
    valStatement = 'Text too short';
  } else if (props.length >= 5) {
    valStatement = 'Text long enough';
  }
  return (
    <div>
      <p>{valStatement}</p>
    </div>
  );
};

export default validation;
