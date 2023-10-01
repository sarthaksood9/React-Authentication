import React, { useState } from 'react'

import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import AuthDetails from './AuthDetails';
// import {  set, ref , update } from "firebase/auth";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");



  console.log(username, email, password);

  const sighUpBtn = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        // set(ref(database, "users/" + user.uid), {
        //   username: username,
        //   email: email
        // })
        alert("done")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage)
      });
  }

  const logInbtn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("logedIn")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  }

  return (
    <div className='bodys'>
      <div className="Form">
        <h1>Login/signUp</h1>


        <div className="inputs">
          <label for="username">Email</label>
          <input placeholder="username" id="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        </div>


        <div className="inputs">
          <label for="email">Email</label>
          <input placeholder="Emial..." id="email" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>


        <div className="inputs">
          <label for="password">Password</label>
          <input placeholder="password..." id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>

        <div className="btns">
          <button onClick={() => { logInbtn() }} id="logIn">LogIn</button>
          <button onClick={()=>{sighUpBtn()}} id="signUp">SignIn</button>
        </div>
      </div>
      <AuthDetails/>
    </div>
  )
}

export default Login