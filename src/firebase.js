// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase} from "firebase/database";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMmGUw01LFSpZWusQUecA_gT12ZeBkEc8",
  authDomain: "authanticationlogin-f6fc9.firebaseapp.com",
  databaseURL: "https://authanticationlogin-f6fc9-default-rtdb.firebaseio.com",
  projectId: "authanticationlogin-f6fc9",
  storageBucket: "authanticationlogin-f6fc9.appspot.com",
  messagingSenderId: "654192522186",
  appId: "1:654192522186:web:2b46f10b8bf17bc4aa1533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider=new GoogleAuthProvider(app);
// export const database = getDatabase(app);

