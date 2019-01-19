import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCM-HWNg7aGGHdTpcXb7om-_YztOY_2eJU",
    authDomain: "planner-8958b.firebaseapp.com",
    databaseURL: "https://planner-8958b.firebaseio.com",
    projectId: "planner-8958b",
    storageBucket: "planner-8958b.appspot.com",
    messagingSenderId: "630274180015"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true}); // uruchomienie firestora i update timestampa

  export default firebase;
