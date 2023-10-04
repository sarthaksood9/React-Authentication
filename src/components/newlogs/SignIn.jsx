import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from '../../firebase';

import { FcGoogle } from "react-icons/fc"

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            alert("your Account is created");
        }).catch((err) => {
            console.log(err);
        })
    }


    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                alert("your Account is created");

            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="Form">
            <h1><b>Create Your Account</b></h1>
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
                <button onClick={() => { createUser() }} id="signUp">CREATE ACCOUNT</button>
            </div>
            <div className='btns'>
                <button onClick={() => { googleSignIn() }}><FcGoogle /></button>
            </div>
        </div>
    )
}

export default SignIn