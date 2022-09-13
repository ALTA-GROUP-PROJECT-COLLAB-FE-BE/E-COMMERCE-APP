import React from "react";
import "../App.css";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

function NavBar() {
  return (
    <header>
      <Navbar className="bg-main rounded-bottom shadow-lg">
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-white">
            E-Commerce
          </Navbar.Brand>
          <Form>
            <Form.Group>
              <div className="icon-inside d-none d-md-block ">
                <i>
                  <BiSearchAlt style={{ width: "20px", height: "20px" }} />
                </i>
                <input type="search" placeholder="Search..." className="custom-search" />
              </div>
              <Button type="submit" className="visually-hidden"></Button>
            </Form.Group>
          </Form>
          <Nav className="justify-end align-items-center gap-3">
            <Nav.Link href="/cart">
              <BsCartFill style={{ width: "2rem", height: "2rem" }} />
            </Nav.Link>
            <Nav.Link href="/login">
              <Button className="btn-main">Login</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
