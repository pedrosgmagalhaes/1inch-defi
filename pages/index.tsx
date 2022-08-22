import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Form, Button } from "react-bootstrap"
import styles from "../styles/Home.module.scss"
import { setAuthState } from "../store/authSlice"
import { wrapper } from "../store/store"
import { FormData } from "../types/formTypes"
import { useForm } from "react-hook-form"
import useSWR from "swr"
import axios from "axios"

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const [formData, setFormState] = React.useState({})
  const fetcher = (url) =>
    axios.post(url, {
      body: JSON.stringify(formData),
    })
  const { data, error } = useSWR("/api/sendingSwapData", fetcher)
  const onSubmit = handleSubmit((data) => setFormState(data))

  return (
    <div className={styles.container}>
      <Head>
        <title>Iora Swap</title>
        <meta name="description" content="Swaping IORAS for any tokens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="tokenIn">
            <Form.Label>Select Token In</Form.Label>
            <Form.Control as="input" {...register("tokenIn")} />
            <Form.Text className="text-muted">
              {errors.tokenIn && <span>This field is required</span>}
              Enter the smart contract from your token in
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Token Out</Form.Label>
            <Form.Control as="input" {...register("tokenOut")} />
            <Form.Text className="text-muted">
              {errors.tokenOut && <span>This field is required</span>}
              Enter the smart contract from your token out
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="totalAmount">Amount</Form.Label>
            <Form.Control
              type="number"
              id="amount"
              aria-describedby="totalAmount"
              {...register("amount")}
            />
            <Form.Text id="totalAmount" muted>
              {errors.amount && <span>This field is required</span>}
              Insert the total amount to buy.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="totalSlippage">Slippage</Form.Label>
            <Form.Control
              type="number"
              id="slippage"
              placeholder="1"
              aria-describedby="totalSlippage"
              {...register("slippage")}
            />
            <Form.Text id="totalSlippage" muted>
              {errors.slippage && <span>This field is required</span>}
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
