import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
    
            <Navbar bg="dark" variant="dark" className="px-3">
                <Navbar.Brand> Logo </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={'/'} className="nav-link">Login</Link>
                    <Link to={'/register'} className="nav-link">Register</Link>
                    <Link to={'/create'} className="nav-link">Create</Link>
                    <Link to={'/product'} className="nav-link">My Product</Link>
                </Nav>
            </Navbar>
        </div>
        
    )
}

export default Header