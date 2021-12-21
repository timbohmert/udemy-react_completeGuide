import { useState } from 'react';

const useInput = (validFunc) => {
  const [enteredValue, setEnteredValue] = useState('');

  const [inputTouched, setInputTouched] = useState(false);

  const enteredValueIsValid = validFunc(enteredValue);

  const inputIsInvalid =
    !enteredValueIsValid && inputTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setInputTouched(false);
  };

  return {
    enteredValue,
    inputTouched,
    enteredValueIsValid,
    inputIsInvalid,
    valueInputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
