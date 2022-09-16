import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Login.css";

const Login = ({ token, setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = () => {
    setError("");
    setUserName("");
    setPassword("");
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data);
      });
  };
  return (
    <div>
      <main className="form-container">
        <Form className="form-box m-auto">
          <h1 className="login">Login</h1>
          <Form.Group className="title" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control className="username" type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </Form.Group>
          <Form.Group className="title" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error ?? (
              <small className="d-flex justify-content-center" style={{ color: "red" }}>
                {error}
              </small>
            )}
          </Form.Group>
          <Form.Group className="button">
            <Button onClick={loginHandler} className="submit">
              Sign In
            </Button>
          </Form.Group>
          <p className="signup">
            Dont have an account yet ? <Link to="/register">Sign Up</Link> here
          </p>
        </Form>
      </main>
    </div>
  );
};

export default Login;
