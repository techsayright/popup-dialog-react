import './App.css';
import { AddUser } from 'Components/Users/AddUser';
import { useState } from 'react';
import {UserList} from 'Components/Users/UserList'

function App() {
  console.log("hlee");
  const [vals, setVals]= useState([]);

  const addValue=(name, age)=>{
    console.log(name, age);
    setVals((preVal)=>{
      return [...preVal ,{name: name, age: age}];
    })

  }

  return (
    <div className="App">
      <AddUser addValue={addValue}/>
      {!vals.length || <UserList valArray={vals}/>}
    </div>
  );
}

export default App;
