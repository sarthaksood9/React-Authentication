import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginToAccount = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("logged in Sucessfully")
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="Form">
            <h1><b>Log In</b></h1>

            <div className="inputs">
                <label for="email">Email</label>
                <input placeholder="Emial..." id="email" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className="inputs">
                <label for="password">Password</label>
                <input placeholder="password..." id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <div className="btns">
                <button onClick={() => { LoginToAccount() }} id="logIn">Log In</button>
            </div>
        </div>
    )
}

export default Login