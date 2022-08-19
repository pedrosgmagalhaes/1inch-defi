import type { NextPage } from "next"
import { Container, Nav, Navbar, Button } from "react-bootstrap"

const Navegation: NextPage = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          iora<b>swap</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Nav>
        <Button variant="primary">Connect Wallet</Button>
      </Nav>
    </Navbar>
  )
}

export default Navegation
