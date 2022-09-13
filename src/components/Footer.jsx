import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <Navbar className="bg-main rounded-top inner-shadow-lg py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-white">
            E-Commerce
          </Navbar.Brand>
          <Nav className="justify-end align-items-center ">
            <Nav.Link href="#insta" className="text-white">
              <BsInstagram style={{ width: "1.2rem", height: "1.2rem" }} />
            </Nav.Link>
            <Nav.Link href="#facebook" className="text-white">
              <BsFacebook style={{ width: "1.2rem", height: "1.2rem" }} />
            </Nav.Link>
            <Nav.Link href="#twitter" className="text-white">
              <BsTwitter style={{ width: "1.2rem", height: "1.2rem" }} />
            </Nav.Link>
          </Nav>
          <p className="d-block mb-0 text-white">Copyright</p>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
