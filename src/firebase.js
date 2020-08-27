// const firebaseConfig = {
//     apiKey: "AIzaSyC4OJMoeNk_oxD_OMocJ0Mq9Pwu5Y-v-VE",
//     authDomain: "todo-app-firebase-react-10a21.firebaseapp.com",
//     databaseURL: "https://todo-app-firebase-react-10a21.firebaseio.com",
//     projectId: "todo-app-firebase-react-10a21",
//     storageBucket: "todo-app-firebase-react-10a21.appspot.com",
//     messagingSenderId: "130276957950",
//     appId: "1:130276957950:web:a93e852ac3659fdca7cfaf",
//     measurementId: "G-R1ZT0WFD9W"
//   };

import firebase from "firebase"

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyC4OJMoeNk_oxD_OMocJ0Mq9Pwu5Y-v-VE",
    authDomain: "todo-app-firebase-react-10a21.firebaseapp.com",
    databaseURL: "https://todo-app-firebase-react-10a21.firebaseio.com",
    projectId: "todo-app-firebase-react-10a21",
    storageBucket: "todo-app-firebase-react-10a21.appspot.com",
    messagingSenderId: "130276957950",
    appId: "1:130276957950:web:a93e852ac3659fdca7cfaf",
    measurementId: "G-R1ZT0WFD9W"
})

const db = firebase.firestore()

export {db}



