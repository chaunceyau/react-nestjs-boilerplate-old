import * as React from 'react'

import { Link, useNavigate } from '@reach/router'

import { gql } from 'apollo-boost'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import { useAuth } from '../context/auth-context'

export interface ILoginProps {
  path?: string
  default?: boolean
}

export default class Login extends React.PureComponent<ILoginProps> {
  render() {
    return (
      <div className="bg-light login-form-container d-flex align-items-center">
        <LoginForm />
      </div>
    )
  }
}

function LoginForm() {
  const auth = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, watch, errors } = useForm()

  async function onSubmit({ email, password }: any, other: any) {
    try {
      await auth.login({ email, password }).then(() => navigate('/dashboard'))
      // await loginMutation({
      //   variables: { email, password }
      // })

      // navigate('/projects')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container mb-5">
      <div className="row mb-2">
        <div className="col-md-12 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="mx-auto login-form-width">
              <div className="card rounded shadow shadow-sm">
                <div className="card-body p-4">
                  <div className="pl-4 pr-4 pb-4 pt-2 text-center">
                    {/* <img
                      alt="Requesto Logo"
                      src={require('../../assets/requesto_logo.png')}
                      className="avatar img-fluid"
                      style={{ height: 80 }}
                    /> */}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset disabled={false}>
                      <div className="form-group">
                        <label htmlFor="email" className="font-weight-bold">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control shadow-sm"
                          placeholder="Enter your email"
                          ref={register}
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password" className="font-weight-bold">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control shadow-sm"
                          placeholder="Enter your password"
                          ref={register}
                        />
                      </div>
                      {/* {mutation_error && (
                        <div className="row">
                          {mutation_error.graphQLErrors.map(error => {
                            return (
                              <p className="text-danger px-4">
                                {error.message}
                              </p>
                            )
                          })}
                        </div>
                      )} */}
                      <div className="row mt-2">
                        <div className="col">
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                        </div>
                        <div className="col d-flex align-items-center">
                          <Link to="/" className="font-weight-bold">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <small className="text-secondary">
            © 2020 Requesto, Inc. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  )
}

const MUTATION_LOGIN_USER = gql`
  mutation MUTATION_LOGIN_USER($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      id
    }
  }
`
