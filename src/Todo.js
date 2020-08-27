import React from 'react'
import List from '@material-ui/core/List';
import { ListItem, ListItemText, Button } from '@material-ui/core';
import "./Todo.css"
import { db } from './firebase';

function Todo(props) {
    console.log(props)
    return (
        <List>
            <ListItem>
                {console.log(props.eachtodo)}
                <ListItemText primary={props.eachtodo.ToDo} secondary="Dummy Deadline!!" />
                {/* Props is the property and text1 is the property of passed variable which is props. */}
                {/* Props is the object now and eachtodo is the text. */}
            </ListItem>
            {/* {console.log(db.collection('collectiondj').doc(props))} */}
            <Button onClick={event => 
                console.log(db.collection('collectiondj').doc(props.eachtodo.id).delete())
                // db.collection('collectiondj').doc(props).delete
                } >Delete</Button>
        </List>
    )
}

export default Todo
