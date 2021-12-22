import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const nameValidator = (name) => {
    return name.trim() !== '';
  };

  const emailValidator = (email) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  //First Name
  const {
    enteredValue: enteredFirstName,
    enteredValueIsValid: firstNameIsValid,
    inputIsInvalid: firstNameError,
    valueInputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(nameValidator);

  //Last Name
  const {
    enteredValue: enteredLastName,
    enteredValueIsValid: lastNameIsValid,
    inputIsInvalid: lastNameError,
    valueInputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(nameValidator);

  //email Name
  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: emailIsValid,
    inputIsInvalid: emailError,
    valueInputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(emailValidator);

  //form validators
  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  //form handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !firstNameIsValid ||
      !lastNameIsValid ||
      !emailIsValid
    ) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstInputClasses = firstNameError
    ? 'form-control invalid'
    : 'form-control';

  const lastInputClasses = lastNameError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && (
            <p>Please enter a first name.</p>
          )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && (
            <p>Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
