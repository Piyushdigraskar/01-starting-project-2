import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, SetIsValid] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsBlurred(false);
      SetIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsBlurred(true);
      SetIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const buttonBlurHandler = () => {
    setIsBlurred(true); // set blur when button is blurred
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div className={`${!isValid && isBlurred ? 'notAdded':''}`}>
        <Button disabled={!isValid} onClick={formSubmitHandler} onBlur={buttonBlurHandler} type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
