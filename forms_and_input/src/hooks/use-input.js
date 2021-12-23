import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched
    };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }

  return {
    initialInputState
  };
};

const useInput = (validFunc) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = validFunc(inputState.value);

  const inputIsInvalid =
    !enteredValueIsValid && inputState.isTouched;

  const valueInputChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    enteredValueIsValid,
    inputIsInvalid,
    valueInputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
