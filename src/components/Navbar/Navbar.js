import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
      <Navbar style={navStyle}>
        <Navbar.Brand href="/" data-testid="title">sofia's cocktail site</Navbar.Brand>
        <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/support">Support</Nav.Link>
        </Nav>
      </Navbar>
    );
}

const navStyle = { 
    borderBottom: "2px solid #D76735",
    marginBottom: "15px"
}