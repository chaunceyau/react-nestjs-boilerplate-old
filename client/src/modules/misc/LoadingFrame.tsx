import * as React from 'react'
import { Link } from '@reach/router'
import { LoadingIndicator } from './LoadingIndicator'

export interface ILoadingFrameProps {}

export function LoadingFrame(props: ILoadingFrameProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand text-white">
          Requesto.io
        </Link>
      </nav>
      <LoadingIndicator />
    </div>
  )
}
