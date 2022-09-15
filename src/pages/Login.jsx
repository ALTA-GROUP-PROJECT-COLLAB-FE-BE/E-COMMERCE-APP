import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../Style/Login.css';
import Header from "../component/Header"
import React, { useState } from "react";
import axios from "axios";





const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleLogin = () => {
        axios.post("https://fakestoreapi.com/auth/login", login)
    }

    const inputData = (event) => {
        console.log(event.target.name)
        let newLogin ={ ...login }
        newLogin[event.target.name] = event.target.value
        setLogin(newLogin)
    }

    return (
        <div>
            <Header />
            <main className="form-container">
                <Form className="form-box m-auto">
                    <h1 className="login">Login</h1>
                    <Form.Group className="title" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            value={login.email}
                            onChange={(event) => inputData(event)}
                            className="email"
                            type="email"
                            placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="title" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={login.password}
                            onChange={(event) => inputData(event)}
                            className="password"
                            type="password"
                            placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="button">
                        <Button className="submit" type="submit" onSubmit={handleLogin}>Sign In</Button>
                    </Form.Group >
                    <p className="signup">Dont have an account yet ? <Link to="/register">Sign Up</Link> here</p>
                </Form>
            </main>
        </div>
    );
}

export default Login