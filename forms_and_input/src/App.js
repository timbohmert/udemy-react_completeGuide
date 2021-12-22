//section notes:
//forms and inputs can assume different states
//forms can be invalid or valid states for the input and lead to invalid or valid form state
//may want to limit peoples actions if invalid
//need to know when to validate: when form is submitted, when input is losing focus, or on every keystroke
//when submitted: allows user to enter a valid value before getting warning, but maybe present feedback 'too late'
//losing focus: allow users to enter valid value before warning, useful for untouched forms
//keystroke: warns user before had a chance of entering valid values, if applied on invalid inputs it can provide more direct feedback

import SimpleInput from './components/SimpleInput';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div className="app">
      <SimpleInput />
      <BasicForm />
    </div>
  );
}

export default App;
