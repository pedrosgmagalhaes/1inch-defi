import type { NextPage } from "next"
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { selectAuthState, setAuthState } from "../../store/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

const Navegation: NextPage = () => {
  const authState = useSelector(selectAuthState)
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          iora<b>swap</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {isConnected && `Welcome ${address}`}
      </Container>
      <Nav>
        <Button
          variant="primary"
          onClick={() => (isConnected ? disconnect() : connect())}
        >
          {isConnected ? "Disconnect" : "Connect Wallet"}
        </Button>
      </Nav>
    </Navbar>
  )
}

export default Navegation
