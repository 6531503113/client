import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./loginValidation";
import axios from "axios";
import "./login.css"; 

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
    
        if (!validationErrors.email && !validationErrors.password) {
            axios.post("http://localhost:3307/login", values)
                .then(res => {
                    console.log("Login response:", res.data);
                    if (res.data.message === "Success") {
                        navigate("/home");
                    } else {
                        alert("Invalid credentials");
                    }
                })
                .catch(err => {
                    if (err.response) {
                        console.error("Login Error:", err.response.data);
                        alert(err.response.data.error || "Login failed! Please try again.");
                    } else {
                        console.error("Network Error:", err);
                        alert("Network error! Please check your connection.");
                    }
                });
        }
    };
    
    return (
        <div className="login-container">
            {/* ส่วนซ้าย: ฟอร์ม */}
            <div className="login-form">
            <div className="logo"/>
                <h2>Login</h2>
                <p>Login to your account.</p>
                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter Email"
                        onChange={handleInput} className="input-field"/>
                    {errors.email && <span className="error-text">{errors.email}</span>}

                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter Password"
                        onChange={handleInput} className="input-field"/>
                    {errors.password && <span className="error-text">{errors.password}</span>}
                    
                    <div className="remember-forgot">

                        <Link to="/signup" className="create-account">Create an account</Link>
                    </div>

                    <button type="submit" className="signin-btn">Sign In</button>
                </form>
            </div>

            {/* ส่วนขวา: พื้นหลังภาพ */}
            <div className="login-image"></div>
           
        </div>
    );
}

export default Login;
