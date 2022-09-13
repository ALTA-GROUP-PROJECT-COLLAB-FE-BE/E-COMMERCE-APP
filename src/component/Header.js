import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar bg="#ffff" className="px-3">
            <Nav className="me-auto">
                <Link to={'/login'} ></Link>
                <Link to={'/register'} ></Link>
            </Nav>
        </Navbar>
    )
}

export default Header