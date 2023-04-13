import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import '../../App.css'

export default function SignUpPage() {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleRegister()
    {
        
        axios.post('https://smartpaarkingbackendiot.onrender.com/api/register', {
            "name": name,
            "address": address,
            "email": email,
            "password": password
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 201) {
                    
                    navigate('/Login')

                }
            }).then(() => {
                setName("")
                setAddress("")
                setEmail("")
                setPassword("")
                
            })
    }
    return (
        <div style={{ margin: 'auto', width: '50%', border: '1px solid', padding: '10px', marginTop: '150px', backgroundColor: 'red', borderRadius: '25px' }}>
            <div className="text-center m-5-auto" style={{ backgroundColor: 'red',justifyContent:'center',alignItems:'center',flex:1 }}>
                <h2 style={{ backgroundColor: 'red' }}>Join us</h2>
                <h5 style={{ backgroundColor: 'red' }}>Create your personal account</h5>
                <>
                    <p style={{ backgroundColor: 'red' }}>
                        <label style={{ backgroundColor: 'red' }}>Username</label><br />
                        <input type="text" value={name} 
                            onChange={(e) => setName(e.target.value)}
                        name="first_name" required  />
                    </p>
                    <p style={{ backgroundColor: 'red' }}>
                        <label style={{ backgroundColor: 'red' }}>Email address</label><br />
                        <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" name="email" required />
                    </p>

                    <p style={{ backgroundColor: 'red' }}>
                        <label style={{ backgroundColor: 'red' }}> Address</label><br />
                        <input type="text" value={address} required onChange={(e) => setAddress(e.target.value)} name="Address"  />
                    </p>
                    <p style={{ backgroundColor: 'red' }}>
                        <label style={{ backgroundColor: 'red' }}>Password</label><br />
                        <input value={password} required onChange={(e) => setPassword(e.target.value)}  type="password" name="password"  />
                    </p>
                    <p style={{ backgroundColor: 'red' }}>
                        <input style={{ backgroundColor: 'red' }} type="checkbox" name="checkbox" id="checkbox" required /> <span style={{ backgroundColor: 'red' }}>I agree all statements in <a style={{ backgroundColor: 'red' }}  href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p style={{ backgroundColor: 'red',marginTop: '20px'}}>
                        <button id="btns" onClick={handleRegister} type="submit">Register</button>
                    </p>
                </>
                
            </div>
        </div>
       
    )

}
