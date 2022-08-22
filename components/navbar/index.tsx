import React, { useEffect } from "react"
import type { NextPage } from "next"
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { selectAuthState, setAuthState } from "../../store/authSlice"
import { useDispatch, useSelector } from "react-redux"

const Navegation: NextPage = () => {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()

  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  useEffect(() => {
    console.log(address)
  }, [address, isConnected])

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            iora<b>swap</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {isConnected && `Welcome ${address}`}
        </Container>
        <Nav>
          <>
            <Button
              variant="primary"
              onClick={async () => {
                if (authState) {
                  await disconnect()
                  dispatch(setAuthState(false))
                } else {
                  await connect()
                  dispatch(setAuthState(true))
                }
              }}
            >
              {isConnected ? "Disconnect" : "Connect Wallet"}
            </Button>
          </>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navegation
