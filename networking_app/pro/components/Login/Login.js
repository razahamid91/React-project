import React from 'react';
import './Login.css'

export default function Login() {

    return (
        <div className='login_container'>
            <div className="login_container_left">
                <div className="login_container_left_text">
                    <p>NETWORKING HAS NEVER BEEN EASIER</p>
                </div>
            </div>
            <div className="login_container_right">
                <div className="form_container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Y1dix8Znc1QDHxsfD08ahNd2PjogtliBVMXREw7L&s" alt =''/>
                    <form>
                        <input type='text' placeholder="Full Name (required if registering)" />
                        <input type='text' placeholder="Profile Pic Url (optional)" />
                        <input type='email' placeholder="Email" />
                        <input type='password' placeholder="Password" />
                        <button>Sign In</button>
                    </form>
                    <h3 className="guest_option">Guest Login</h3>
                    <p>Not a member? <span className="register_option">Register now</span></p>

                </div>
            </div>
        </div>
    )
}