import React, { useState } from 'react'
import List from '@material-ui/core/List';
import { ListItem, ListItemText, Button, Modal, makeStyles, Input } from '@material-ui/core';
import "./Todo.css"
import { db } from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {
    
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateToDo =() => {
        db.collection('collectiondj').doc(props.eachtodo.id).set(
            {
                ToDo: input,
            }, {merge: true}
        )
        setOpen(false);
    }


    return (
        <>
        <Modal className={classes.paper}
            open={open}
            onClose={handleClose}
        >   
            <div>
                <Input placeholder={props.eachtodo.ToDo} value={input} onChange={event => setInput(event.target.value)} />
                <Button onClick={e => updateToDo()}>Update</Button>
            </div>
        </Modal>
        <List>
            <ListItem> 
                {console.log(props.eachtodo)}
                <ListItemText primary={props.eachtodo.ToDo} secondary="Dummy Deadline!!" />
                {/* Props is the property and text1 is the property of passed variable which is props. */}
                {/* Props is the object now and eachtodo is the text. */}
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            {/* {console.log(db.collection('collectiondj').doc(props))} */}
            <Button onClick={event => 
                console.log(db.collection('collectiondj').doc(props.eachtodo.id).delete())
                // db.collection('collectiondj').doc(props).delete
                } >Delete</Button>
        </List>
        </>
    )
}

export default Todo
