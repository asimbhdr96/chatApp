import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDt8x1f58AawtcrR0Jfa7DwhtDlfiqrwNY",
  authDomain: "chatapp-b6276.firebaseapp.com",
  projectId: "chatapp-b6276",
  storageBucket: "chatapp-b6276.appspot.com",
  messagingSenderId: "39933203892",
  appId: "1:39933203892:web:a62901de1b668394c0cee1",
  measurementId: "G-RY9QC4L9V2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
