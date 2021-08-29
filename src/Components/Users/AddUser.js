import React, { useState } from "react";
import styles from "Components/CSS/AddUser.module.scss";
import { Card } from 'Components/UI/Card';
import { Button } from "Components/UI/Button";
import ErrorModal from "Components/ErrorModal/ErrorModal";

export const AddUser = ({addValue}) => {

  console.log("hey");
  const [err, setErr]= useState(null)

  const onSubmitHandler=e=>{
    e.preventDefault();

    const {name, Age }=e.target.elements;

    if(name.value.trim().length===0 || Age.value.trim().length===0){
      // alert("Error");
      setErr({caption: "Sorry! You have not Entered Anything..."})
      return;
    }

    else if(Age.value < 1){
      // alert("less")
      setErr({caption: "Please! Enter Age > 1"})
      return;
    }

    addValue(name.value, Age.value);

    setErr(null)
    name.value=""
    Age.value=""
  }

  const errHandler=()=>{
    setErr(null)
  }

  return (
    <React.Fragment>
      { !err || <ErrorModal caption={err.caption} onClick={errHandler} />}
      <form onSubmit={onSubmitHandler}>
        <Card className={styles["form-control"]}>
          <div className={styles.name}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" placeholder="Enter Name" />
          </div>
          <div className={styles.age}>
            <label htmlFor="Age">Age : </label>
            <input type="number" id="Age" placeholder="Enter Age"/>
          </div>
          <div className={styles.btn}>
            <Button type="submit">ADD</Button>
            {/* <Button type="button" backgroundColor="blue" fontSize="1rem" color="red" borderColor="red" hoverBgc="red" hoverColor="blue" hoverBorderColor="blue">hello</Button> */}
          </div>
        </Card>
      </form>
    </React.Fragment>
  );
};
