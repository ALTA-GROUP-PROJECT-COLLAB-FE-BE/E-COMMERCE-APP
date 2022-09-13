import { Form, Button } from "react-bootstrap"

import { Link } from "react-router-dom"
import '../Style/Login.css';

const Login = () => {
    return (
        <div>
        
            <main className="form-container">
                <Form className="form-box m-auto">
                    <h1 className="login">Login</h1>
                    <Form.Group className="title" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="email" type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="title" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="button">
                        <Button className="submit" type="submit">
                            Sign In
                        </Button>
                    </Form.Group >
                    <p className="signup">Dont have an account yet ? <Link to="/register">Sign Up</Link> here</p>
                </Form>
            </main>
        </div>
    );
}

export default Login