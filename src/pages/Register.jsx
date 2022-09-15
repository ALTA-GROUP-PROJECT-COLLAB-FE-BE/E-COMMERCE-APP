import { Button, Form } from "react-bootstrap"
import '../Style/Register.css'
import Header from "../component/Header"

const Register = () => {
    return (
        <div>
            <Header />
            <main className="form-container-register">
                <Form className="form-box-regis m-auto">
                    <h1 className="register">Register</h1>
                    <div className="middle">
                        <Form.Group className="start" controlId="formBasicEmail">
                            <Form.Label className="sub-title">Nama</Form.Label>
                            <Form.Control className="email-regis" type="text" placeholder="Nama" />
                        </Form.Group>
                        <Form.Group className="start" controlId="formBasicEmail">
                            <Form.Label className="sub-title">Email</Form.Label>
                            <Form.Control className="email-regis" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="start" controlId="formBasicPassword">
                            <Form.Label className="sub-title">Password</Form.Label>
                            <Form.Control className="password-regis" type="password" placeholder="Password" />
                        </Form.Group>
                    </div>
                    <Form.Group className="button-regis">
                        <Button className="sign" type="submit">
                            Sign Up
                        </Button>
                    </Form.Group >
                </Form>
            </main>
        </div>
    )
}

export default Register