import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        const val = e.target.value
        setEmail(val)
    }

    const handlePassword = (e) => {
        const val = e.target.value
        setPassword(val)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('email', email)
        console.log('password', password)
        const user = {
            email: email,
            password: password
        }
        axios.post('http://localhost:3100/auth/login', user).then(res => {
            console.log(res.data.access_token)
            if (res?.data?.access_token) {
                const accessToken = `Bearer ${res.data.access_token}`
                localStorage.setItem('accessToken', accessToken)
            }
        })
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleLogin}>
                <label>
                    E-mail:
                    <input value={email} onChange={handleEmail} type="text" placeholder='email'></input>
                </label>
                <label>
                    Password:
                    <input value={password} onChange={handlePassword} type="password" placeholder='password'></input>
                </label>
                <button className='login-button' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login