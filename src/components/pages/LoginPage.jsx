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
        axios.post('https://smartpaarkingbackendiot.onrender.com/api/login', {
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
        <div style={{ margin: 'auto', width: '50%', border: '1px solid', padding: '10px', marginTop: '150px', backgroundColor: 'red', borderRadius: '25px' }}>
            <div>

                <div style={{ backgroundColor: 'red' }}>
                    <div className="text-center m-5-auto" style={{ backgroundColor: 'red' }}>
                        <h2 className='headers' style={{ backgroundColor: 'red' }}>Sign in to us</h2>

                        <p className='inBox' style={{ backgroundColor: 'red' }}>
                            <label style={{ backgroundColor: 'red' }}>Email Address :- </label>
                            <input style={{ backgroundColor: 'red' }} className='inp' type="text" name="first_name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </p>
                        <p className='inBox' style={{ backgroundColor: 'red' }}>
                            <label style={{ backgroundColor: 'red' }}>Password :-</label>
                            {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br /> */}
                            <input style={{ backgroundColor: 'red' }} className='inp' type="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </p>
                        <p className='inBox btn' style={{ backgroundColor: 'red' }}>
                            <button onClick={handleLogin} className="btns">Login</button>
                        </p>

                        <footer style={{ backgroundColor: 'red' }}>
                            <p style={{ backgroundColor: 'red' }}>First time? <Link to="/register" style={{ backgroundColor: 'red' }}>Create an account</Link>.</p>

                        </footer>
                    </div>
                </div>

            </div>
        </div>

    )
}