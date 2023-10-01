import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

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
        </div>
    )
}

export default SignIn