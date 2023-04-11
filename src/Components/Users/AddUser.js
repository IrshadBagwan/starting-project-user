import React, { useState } from "react";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErroModal.js";


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");
  const [error,setErrors] = useState();
  
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0){
      setErrors({
        title:"Invalid Input",
        message:"Please enter a valid name and age (non-empty values)."
      })
        return;
    }
    if(+enteredUserage < 1){
      setErrors({
        title:"Invalid age",
        message:"Please enter a valid age (> 0)."
      })
        return;
    }
    props.onAddUser(enteredUsername,enteredUserage);
    setEnteredUserage('');
    setEnteredUsername('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  };


  const errorHandler = ()=>{
    setErrors(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enteredUserage}
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
      
    </Card>
    </div>
  );
};

export default AddUser;
