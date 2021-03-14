import React, { useState } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

const App = () => {
  const [userInputState, setUserInputState] = useState({
    input: '',
    inputLen: 0
  });

  const inputs = (event) => {
    setUserInputState({
      input: event.target.value,
      inputLen: event.target.value.length
    });
  };

  const deleteChar = (charIndex) => {
    const chars = [...userInputState.input.split('')];
    chars.splice(charIndex, 1);
    setUserInputState({ input: chars.join(''), inputLen: chars.join('').length });
  };

  let chars = null;

  if (userInputState.inputLen >= 5) {
    chars = (
      <div>
        {userInputState.input.split('').map((char, index) => {
          return <Char char={char} click={() => deleteChar(index)} />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => inputs(event)} />
      <p>{userInputState.inputLen}</p>
      <Validation length={userInputState.inputLen} />
      {chars}
    </div>
  );
};

export default App;
