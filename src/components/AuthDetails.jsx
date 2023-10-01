import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import Login from './newlogs/Login';
import SignIn from './newlogs/SignIn';


const AuthDetails = () => {


    const [authUser, setAuthUser] = useState(null);
    const [logInState, setLogInState] = useState(false);

    useEffect(() => {
        const lister = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                setLogInState(true);
            }
            else {
                setAuthUser(null);
            }
        })
    }, [])
    console.log(authUser);

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert("logged Out Sucessfully")
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <>
            <div className='bodys'>
                {logInState ? <Login /> : <SignIn />}
                <div className='authDetails'>
                    {authUser ?
                        <div className='infoDivs'>
                            <p><b>You are loggedIn with : </b>{authUser.email}</p>
                            <button className='btns' onClick={() => { userSignOut(); }}>signOut</button>
                        </div>
                        :
                        <div className='infoDivs'>
                            <p><b>Not Logged in yet</b></p>
                            <p>Please <span className='coloredBtns' onClick={()=>{setLogInState(true)}}>LogIn</span> or <span className='coloredBtns' onClick={()=>{setLogInState(false)}}>SignUp</span> first</p>

                        </div>
                    }
                </div>
            </div>



            {/* <div className='authDetails'>
                {authUser ?
                    <div className='infoDivs'>
                        <p><b>You are loggedIn with : </b>{authUser.email}</p>
                        <button className='btns' onClick={() => { userSignOut() }}>signOut</button>
                    </div>
                    :
                    <div>
                        <p><b>Not Logged in yet</b></p>
                        <p>please login first</p>

                    </div>
                }
            </div> */}
        </>


    )
}

export default AuthDetails