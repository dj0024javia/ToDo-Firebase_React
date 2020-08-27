import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Input, InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Todo from './Todo';
import { db } from './firebase';
import firebase from "firebase"

function App() {
  // useState means that session data will be in short term memory.
  // input, todos are the variables and setTodos, setInput are the methods to set todos and input variables
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // When the app loads, we need to listen to db and fetch the latest values
  useEffect(() => {
    db.collection('collectiondj').orderBy('timestamp', 'desc').onSnapshot(
      snapshot => {
        setTodos(snapshot.docs.map(doc => (
          {id: doc.id, ToDo: doc.data().ToDo}
          )))
    })
  }, [])

  //  So addToDo is an event which is called on click of addToDo Button which takes text(input) from textbox and adds it to existing array(setTodos([...todos, input]))
  const addToDo = (event => {
    event.preventDefault()
    console.log("Don't click me. It tickels!!");
    
    db.collection('collectiondj').add({
      ToDo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input])
    setInput('')
  }   
  )

  return (
    <div className="App">
      <h1> Hello React World!!</h1>
      {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}

      <FormControl>
        <InputLabel>Add ToDo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        
      </FormControl>
      {/* disabled is used when the text field is null so it doesn't actually add the null values to our todo list */}
      <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addToDo}>Add ToDo</Button>

      <ul>
        {todos.map(eachtodo => (
          <Todo eachtodo={eachtodo}/>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
