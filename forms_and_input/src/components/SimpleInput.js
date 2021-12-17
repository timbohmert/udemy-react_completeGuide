//demonstrating useState and useRef to save name and read that upon submission.
//useState captures entered name in enteredName state from the input with onChange with pointer to the nameInputChangeHandler
//useRef creates ref of the input with enteredInputRef
//this component
//useRef might be better if you are only evalutating the name upon submission, while useState formate might be better if you evaluate for each keystroke

//we next added state to capture if the input is valid or not by checking if data has been put into the input. We dynamically added an error message if the user hit submit and an input had not been added. also dynamically changed the input class to become red with invalid input

//created enteredNameTouch state to capture if that input has had interaction, and this allows for enteredNameIsValid state to start as false, which is more correct. Then change the enteredNameTouch state with submission of the form

import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
  //name input states
  const [enteredName, setEnteredName] = useState('');

  const [enteredNameTouch, setEnteredNameTouch] =
    useState(false);

  //email input states
  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredEmailTouch, setEnteredEmailTouch] =
    useState(false);

  //name input validators
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid =
    !enteredNameIsValid && enteredNameTouch;

  //email input validators
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const enteredEmailIsValid = re.test(enteredEmail);
  const emailInputIsInvalid =
    !enteredEmailIsValid && enteredEmailTouch;

  //form validators
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //name input handlers
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouch(true);
  };

  //email input handlers
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouch(true);
    setEnteredEmailTouch(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouch(false);
    setEnteredEmailTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">
            Name must not be empty
          </p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">
            Email must not be empty
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
