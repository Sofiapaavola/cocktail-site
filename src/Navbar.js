import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
      <Navbar style={navStyle}>
        <Navbar.Brand href="#home">sofia's cocktail site</Navbar.Brand>
        <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/support">Support</Nav.Link>
        </Nav>
      </Navbar>
    );
}

const navStyle = { 
    borderBottom: "1px solid pink",
    marginBottom: "15px"
}