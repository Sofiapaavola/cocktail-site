import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <Navbar style={navStyle}>
        <Navbar.Brand> 
          <Link style={linkStyle} data-testid="title" to="/" >sofia's cocktail site</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link style={linkStyle} data-testid="home" to="/">Home</Link>
          <Link style={linkStyle} data-testid="about" to="/about">About</Link>
          <Link style={linkStyle} data-testid="support" to="/support">Support</Link>
          <Link style={linkStyle} data-testid="json" to="/json">JSON</Link>
        </Nav>
      </Navbar>
    );
}

const linkStyle = {
  color: 'black',
  padding: '10px', 
  textDecoration: 'none'
}

const navStyle = { 
    borderBottom: "2px solid #D76735",
    marginBottom: "15px"
}