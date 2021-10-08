import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCOF4AAVp6DfI69s-vgoKbeZsUvpRCSkks",
    authDomain: "shriharijal.firebaseapp.com",
    projectId: "shriharijal",
    storageBucket: "shriharijal.appspot.com",
    messagingSenderId: "1085788302668",
    appId: "1:1085788302668:web:0be5c3a03cdc0e6db433e9"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  

  //firebase.firestore().settings({ timestampsInSnapshots : true})

  export default firebase 