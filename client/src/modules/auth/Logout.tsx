import React from 'react'
import { useAuth } from '../context/auth-context'
import { useNavigate } from '@reach/router'
import * as authClient from './auth-client'

export default function Logout(props: any) {
  const auth = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    // authClient.logout()
    auth.logout()
  }, [])

  return <div>loggging out...</div>
}
