import { LoadingFrame } from '../misc/LoadingFrame'
import React from 'react'
import * as authClient from '../auth/auth-client'
import { useQuery } from '@apollo/react-hooks'
import { MUTATION_REGISTER_USERVariables, MUTATION_LOGIN_USERVariables } from '../api'

interface AuthGlobalContext {
  login: (data: MUTATION_LOGIN_USERVariables) => void;
  logout: () => void
  register: (data: MUTATION_REGISTER_USERVariables) => void
  data: any
}

const AuthContext = React.createContext<AuthGlobalContext>({
  login: () => {},
  logout: () => {},
  register: () => {},
  data: undefined
})

function AuthProvider(props: {}) {
  const {
    loading,
    data,
    error,
    refetch,
    called,
    updateQuery
  } = useQuery(authClient.QUERY_CURRENT_USER, { fetchPolicy: 'network-only' })

  const firstAttemptIncomplete = called && loading && !data
  if (firstAttemptIncomplete) {
    if (loading) return <LoadingFrame />
    if (error) {
      return (
        <div>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      )
    }
  }

  const login = (form: MUTATION_LOGIN_USERVariables) => authClient.login(form).then(refetch)
  const register = (form: MUTATION_REGISTER_USERVariables) => authClient.register(form)

  const logout = () =>
    authClient
      .logout()
      .then(() => updateQuery(previousResult => ({ currentUser: null })))

  return (
    <AuthContext.Provider
      value={{
        data: data && data.currentUser,
        login,
        logout,
        register
      }}
      {...props}
    />
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export { AuthProvider, useAuth }
