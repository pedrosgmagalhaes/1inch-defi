import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Form, Button } from "react-bootstrap"
import styles from "../styles/Home.module.scss"
import { setAuthState } from "../store/authSlice"
import { wrapper } from "../store/store"

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(setAuthState(false))
      return {
        props: {
          authState: false,
        },
      }
    }
)

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iora Swap</title>
        <meta name="description" content="Swaping IORAS for any tokens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Form>
          <Form.Group className="mb-3" controlId="tokenIn">
            <Form.Label>Select Token In</Form.Label>
            <Form.Control as="input" />
            <Form.Text className="text-muted">
              Enter the smart contract from your token in
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="tokenOut">
            <Form.Label>Select Token Out</Form.Label>
            <Form.Control as="input" />
            <Form.Text className="text-muted">
              Enter the smart contract from your token out
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="totalAmount">
            <Form.Label htmlFor="amount">Amount</Form.Label>
            <Form.Control
              type="number"
              id="amount"
              aria-describedby="totalAmount"
            />
            <Form.Text id="totalAmount" muted>
              Insert the total amount to buy.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="totalSlippage">
            <Form.Label htmlFor="amount">Slippage</Form.Label>
            <Form.Control
              type="number"
              id="slippage"
              placeholder="1"
              aria-describedby="totalSlippage"
            />
            <Form.Text id="totalSlippage" muted>
              Insert the slippage amount to buy. Default is 1
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Verify
          </Button>
        </Form>
      </main>
    </div>
  )
}

export default Home
