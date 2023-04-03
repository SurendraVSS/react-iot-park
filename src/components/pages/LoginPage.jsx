import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import '../../App.css'
import "./LoginPage.css"
export default function SignInPage() {
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        axios.post('http://43.207.189.44:3009/api/login', {
            "email": email,
            "password": password
        })
            .then(async function (response) {
                console.log(response);
                if (response.status == 200) {
                    await localStorage.setItem('user', JSON.stringify(response.data))
                    await localStorage.setItem('isAuth', JSON.stringify(true))
                    //await authscheck.setAuth(true)
                }
                if (response.status == 200) {
                    navigate('/Main')
                }
            })
            .catch(function (error) {
                alert("Please try again registration failed")
                //setShowAnimation(true)
            }).then((response) => {

                setEmail("")
                setPassword("")

            })
    }
    return (
        <div className="clr">
            <div className="container">


                <div className="text-center m-5-auto">
                    <h2 className='headers'>Sign in to us</h2>

                    <p className='inBox'>
                        <label>Email Address :- </label>
                        <input className='inp' type="text" name="first_name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </p>
                    <p className='inBox'>
                        <label>Password :-</label>
                        {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br /> */}
                        <input className='inp' type="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                    </p>
                    <p className='inBox btn'>
                        <button onClick={handleLogin} className="lgn">Login</button>
                    </p>

                    <footer>
                        <p>First time? <Link to="/register">Create an account</Link>.</p>

                    </footer>
                </div>
            </div>
        </div>
      
    )
}