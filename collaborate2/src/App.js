import React, { Component } from 'react';
import './App.css';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase';

      var config = {
        apiKey: "AIzaSyBdYunsLw556OtMo8_JkEd7YAMPfcbT0Ys",
        authDomain: "collaborate2-4aaf4.firebaseapp.com",
        databaseURL: "https://collaborate2-4aaf4.firebaseio.com",
        projectId: "collaborate2-4aaf4",
        storageBucket: "collaborate2-4aaf4.appspot.com",
        messagingSenderId: "1093839860708"
      };
      firebase.initializeApp(config);

      console.log(firebase);
class App extends Component {

  render() {
  	console.log(firebase);
 	const firebaseRef = firebase.database();
    return (
      <ThreadDisplay db={firebaseRef}/>
    )
  }
}

export default App;
