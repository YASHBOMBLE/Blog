import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './Login.css'
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    async function loginUser() {
        const response = await axios.post('/login', {
            email: email,
            password: password,
        })
        console.log(response.data)
        if (response.data.success) {

            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "Aww yiss!",
            });
            localStorage.setItem('currentUser', JSON.stringify(response.data.data));
            window.location.href = "/"
        }
        else {
            await swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
            });
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser');
        }
    }
    return (

        <div>
           
            <div class="bg-img">
                <div class="content">
                    <header>Login Form</header>
                    
                        <div class="field">
                            <span class="fa fa-user"></span>
                            <input type="text" required placeholder="Email or Phone" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="field space">
                            <span class="fa fa-lock"></span>
                            <input type={show ? "text" : "password"} class="pass-key" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span class="show" onClick={handleShow}>{show ? "Hide" : "Show"}</span>
                        </div>
                        <div class="pass">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div class="field">
                           
                            <input type="submit" value="LOGIN" onClick={loginUser}/>
                        </div>
                 


                    <div class="signup">
                        Don't have account?
                        <a href="signup">Signup Now</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login