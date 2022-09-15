import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import '../Style/Login.css';





const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookies] = useCookies();
    const navigate = useNavigate();

    const handleCookie = () => {
        setCookies("Username", userName, { path: "/"});
        setCookies("Password", password, { path: "/"});
        navigate ("/");
        cookies ("/");
    }
    
    const handleLogin = () => {
        axios
        .post("https://fakestoreapi.com/auth/login", {
            username: userName,
            password: password
        })
        .then((res) => {
            console.log(res.data.token)
        })
        .catch((err) => {
            console.log(err)
        })
        

    }

    function handleRefresh(e) {
        e.preventDefault()
    }


  

    return (
        <div>

            <main className="form-container">
                <Form className="form-box m-auto" onSubmit={(e) => handleRefresh(e)}>
                    <h1 className="login">Login</h1>
                    <Form.Group className="title" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="email"
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                            className="email"
                            type="text"
                            placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="title" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="password"
                            type="password"
                            placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="button">
                        <Button id="button_submit" className="submit" type="submit" onClick={() => handleCookie()}>Sign In</Button>
                    </Form.Group >
                    <p className="signup" onClick={() => handleLogin()}>Dont have an account yet ? <Link to="/register">Sign Up</Link> here</p>
                </Form>
            </main>
        </div>
    );
}

export default Login