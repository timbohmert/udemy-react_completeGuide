//demonstrating useState and useRef to save name and read that upon submission.
//useState captures entered name in enteredName state from the input with onChange with pointer to the nameInputChangeHandler
//useRef creates ref of the input with enteredInputRef
//this component
//useRef might be better if you are only evalutating the name upon submission, while useState formate might be better if you evaluate for each keystroke

//we next added state to capture if the input is valid or not by checking if data has been put into the input. We dynamically added an error message if the user hit submit and an input had not been added. also dynamically changed the input class to become red with invalid input

//created enteredNameTouch state to capture if that input has had interaction, and this allows for enteredNameIsValid state to start as false, which is more correct. Then change the enteredNameTouch state with submission of the form

import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');

  const [enteredNameIsValid, setEnteredNameIsValid] =
    useState(false);

  const [enteredNameTouch, setEnteredNameTouch] =
    useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouch(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName('');

    //below is not ideal cause the code manipulates the dom and that is no bueno
    // nameInput.current.value = ''
  };

  const nameInputIsInvalid =
    !enteredNameIsValid && enteredNameTouch;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">
            Name must not be empty
          </p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
