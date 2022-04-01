import firebase  from "firebase/app";
import "firebase/database"
import "firebase/auth";
import "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyCpFqg2nXL2XUdFvtVxkFD8ts_r-olqoW4",
  authDomain: "sensor-725c6.firebaseapp.com",
  databaseURL: "https://sensor-725c6-default-rtdb.firebaseio.com",
  projectId: "sensor-725c6",
  storageBucket: "sensor-725c6.appspot.com",
  messagingSenderId: "874354464946",
  appId: "1:874354464946:web:c4707ba21ab284b5d2d1ab",
  measurementId: "G-0XMG6VX96G"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export{
    db,
    firebase
}

