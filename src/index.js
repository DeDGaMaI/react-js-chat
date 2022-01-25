import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";


firebase.initializeApp({
    apiKey: "AIzaSyBWnnU77M4uW3wiDDpEIv5a3Z7nqIIHpB0",
    authDomain: "chat-react-a0963.firebaseapp.com",
    projectId: "chat-react-a0963",
    storageBucket: "chat-react-a0963.appspot.com",
    messagingSenderId: "717923070580",
    appId: "1:717923070580:web:edaf827542e9989913d721",
    measurementId: "G-5379NXLLSW"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        firebase, auth, firestore,
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
