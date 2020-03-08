import React from 'react'
  
import { ApolloProvider } from '@apollo/react-hooks'
import { AuthProvider } from './modules/context/auth-context'
import { UserProvider } from './modules/context/user-context'
import { client } from './App'

function AppProviders({ children }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default AppProviders
