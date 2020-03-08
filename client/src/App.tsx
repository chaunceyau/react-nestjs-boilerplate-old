import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
// 
import { Navigation } from './modules/navigation/Navigation'
import { useUser } from './modules/context/user-context'
import { AuthenticatedApp } from './AuthenticatedApp'
import { UnauthenticatedApp } from './UnauthenticatedApp'

export const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL || 'http://localhost:4000/graphql',
  credentials: 'include'
})

function App() {
  const user = useUser()
  console.log('💜 user', user)
  return (
    <ApolloProvider client={client}>
      <div className="d-flex flex-column h-100">
        <Navigation user={user} />
        <div className="container py-2">
          { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App

